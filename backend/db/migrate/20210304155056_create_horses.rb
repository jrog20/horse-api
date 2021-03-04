class CreateHorses < ActiveRecord::Migration[6.0]
  def change
    create_table :horses do |t|
      t.string :barn_name
      t.string :registered_name
      t.string :sire
      t.string :dam
      t.string :dob
      t.string :color
      t.string :pattern_type
      t.string :pedigree
      t.string :registration
      t.string :tested
      t.string :tobiano_gene
      t.string :photo
      t.string :offspring
      t.timestamps
    end
  end
end
