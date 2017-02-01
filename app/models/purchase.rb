# == Schema Information
#
# Table name: purchases
#
#  id          :integer          not null, primary key
#  email       :string
#  amount      :integer
#  description :string
#  currency    :string
#  customer_id :string
#  card        :string
#  product_id  :integer
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Purchase < ActiveRecord::Base
end
