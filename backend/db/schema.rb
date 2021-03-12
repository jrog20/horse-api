# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_03_12_205733) do

  create_table "horses", force: :cascade do |t|
    t.string "barn_name"
    t.string "registered_name"
    t.string "sire"
    t.string "dam"
    t.string "dob"
    t.string "color"
    t.string "pattern_type"
    t.string "pedigree"
    t.string "registration"
    t.string "tested"
    t.string "tobiano_gene"
    t.string "photo"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "offsprings", force: :cascade do |t|
    t.string "year"
    t.string "sex"
    t.string "sire"
    t.integer "horse_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["horse_id"], name: "index_offsprings_on_horse_id"
  end

  add_foreign_key "offsprings", "horses"
end
