/**
 * Created by piyush on 15/8/16.
 */
const data = require('./scrap');

done = false;
const quesAns = data.quesAns(function (questions) {
    done = true;
    console.log(questions);
});
