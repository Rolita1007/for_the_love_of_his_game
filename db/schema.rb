# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170712150650) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "athletes", force: :cascade do |t|
    t.string "name"
    t.string "school"
    t.integer "jersey_number"
    t.string "position"
    t.integer "class_of"
    t.string "team"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "family_id"
    t.index ["family_id"], name: "index_athletes_on_family_id"
  end

  create_table "families", force: :cascade do |t|
    t.string "name"
    t.string "school"
    t.string "team"
    t.string "relationship"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.bigint "athlete_id"
    t.index ["athlete_id"], name: "index_families_on_athlete_id"
  end

  add_foreign_key "athletes", "families"
  add_foreign_key "families", "athletes"
end
