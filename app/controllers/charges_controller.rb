class ChargesController < ApplicationController
  def new
    # this will remain empty unless you need to set some instance variables to pass on
  end

  def create
    # Amount in cents
    # amount = params[:stripeAmount].to_i * 100
    amount = params[:amount]

    # Create the customer in Stripe
    customer = Stripe::Customer.create(
      email: params[:email],
      card: params[:id]
    )
    # Create the charge using the customer data returned by Stripe API
    charge = Stripe::Charge.create(
      customer: customer.id,
      amount: amount,
      description: 'Art Houston customer',
      currency: 'usd'
    )

    purchase = Purchase.create(email: params[:email], card: params[:token],
      amount: params[:amount], currency: charge.currency, customer_id: customer.id,
      product_id: params[:product_id])

  # place more code upon successfully creating the charge
  rescue Stripe::CardError => e
    flash[:error] = e.message
    redirect_to charges_path
    flash[:notice] = "Please try again"
  end
end
