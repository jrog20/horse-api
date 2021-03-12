class OffspringSerializer < ActiveModel::Serializer
  attributes :id, :year, :sex, :sire
  has_one :horse
end
