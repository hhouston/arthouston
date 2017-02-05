class ChargesController < ApplicationController
  def new
    # this will remain empty unless you need to set some instance variables to pass on
    @amount = 500
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
    debugger;
    # Create the charge using the customer data returned by Stripe API
    charge = Stripe::Charge.create(
      customer: customer.id,
      amount: amount,
      description: 'Rails Stripe customer',
      currency: 'usd'
    )

    # place more code upon successfully creating the charge
  rescue Stripe::CardError => e
    flash[:error] = e.message
    redirect_to charges_path
    flash[:notice] = "Please try again"
  end
end
