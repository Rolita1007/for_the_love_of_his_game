class AddAthleteIdToFamily < ActiveRecord::Migration[5.1]
  def change
    add_reference :families, :athlete, foreign_key: true
  end
end
