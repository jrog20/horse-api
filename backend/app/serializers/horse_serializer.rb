class HorseSerializer < ActiveModel::Serializer
  attributes :id, :barn_name, :registered_name, :sire, :dam, :dob, :color, :pattern_type, :pedigree, :registration, :tested, :tobiano_gene, :photo, :offspring
end
