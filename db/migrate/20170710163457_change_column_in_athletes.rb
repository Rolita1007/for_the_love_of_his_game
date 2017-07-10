class ChangeColumnInAthletes < ActiveRecord::Migration[5.1]
  def change
    change_table :athletes do |t|
      t.rename :jeresey_number, :jersey_number
    end
  end
end
