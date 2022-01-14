const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PollSchema = new Schema({
  title: { type: String, required: true },
  options: { type: Array, required: true },
});

PollSchema.pre('save', function() {
    const options = this.options;

    const newOptionsArray = [];

    if(options) {
        options.map((item) => {
            newOptionsArray.push({ option: item, vote: 0 });
        });

        this.options = newOptionsArray;
        this.save();
    }
})

module.exports = mongoose.model('Poll', PollSchema);