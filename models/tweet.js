const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Tweet = new Schema({
  id: { type: Number, required: true },
  created_at: { type: String, required: true },
  id_str: { type: String, required: true },
  full_text: { type: String, required: true },
  truncated: { type: Boolean, required: true },
  display_text_range: { type: Array },
  entities: { type: Object },
  extended_entities: { type: Object },
  source: { type: String },
  in_reply_to_status_id: { type: Number },
  in_reply_to_status_id_str: { type: String },
  in_reply_to_user_id: { type: Number },
  in_reply_to_user_id_str: { type: String },
  in_reply_to_screen_name: { type: String },
  user: { type: Object },
  geo: { type: String },
  coordinates: { type: String },
  place: { type: String },
  contributors: { type: String },
  is_quote_status: { type: Boolean },
  retweet_count: { type: Number },
  favorite_count: { type: Number },
  favorited: { type: Boolean },
  retweeted: { type: Boolean },
  possibly_sensitive: { type: Boolean },
  lang: { type: String }
});
exports.Tweet = mongoose.model("Tweet", Tweet);
