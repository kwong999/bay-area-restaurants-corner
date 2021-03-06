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

ActiveRecord::Schema.define(version: 2019_12_24_034402) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "addresses", force: :cascade do |t|
    t.integer "business_id", null: false
    t.string "address_first"
    t.string "address_second"
    t.string "street"
    t.string "city"
    t.string "state"
    t.integer "zip"
    t.float "lat"
    t.float "lng"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["business_id"], name: "index_addresses_on_business_id", unique: true
  end

  create_table "businesses", force: :cascade do |t|
    t.string "name", null: false
    t.string "description", null: false
    t.string "phone"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["name"], name: "index_businesses_on_name"
  end

  create_table "comments", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "business_id", null: false
    t.string "body", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["business_id"], name: "index_comments_on_business_id"
    t.index ["user_id", "business_id"], name: "index_comments_on_user_id_and_business_id", unique: true
    t.index ["user_id"], name: "index_comments_on_user_id"
  end

  create_table "hours", force: :cascade do |t|
    t.integer "business_id", null: false
    t.string "hours_mon"
    t.string "hours_tue"
    t.string "hours_wed"
    t.string "hours_thu"
    t.string "hours_fri"
    t.string "hours_sat"
    t.string "hours_sun"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["business_id"], name: "index_hours_on_business_id", unique: true
  end

  create_table "rates", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "business_id", null: false
    t.float "rating", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["business_id"], name: "index_rates_on_business_id"
    t.index ["user_id", "business_id"], name: "index_rates_on_user_id_and_business_id", unique: true
    t.index ["user_id"], name: "index_rates_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "role", default: "User", null: false
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
    t.index ["username"], name: "index_users_on_username", unique: true
  end

  create_table "votes", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "comment_id", null: false
    t.integer "voting", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["user_id", "comment_id"], name: "index_votes_on_user_id_and_comment_id", unique: true
  end

end
