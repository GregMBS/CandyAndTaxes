/**
 *
 * @param {number} n
 * @returns {number[]}
 */
function countCandy(n) {
    let box = [0, 0, 0, 0, 0, 0]
    for (let i = 0; i < 6; i++) {
        if (n > 4) {
            box[i] = 5;
        } else if (n > 0) {
            box[i] = n;
        }
        n -= 5;
    }
    return box;
}

/**
 *
 * @param {number} n
 * @returns {string}
 */
function makeBox(n) {
    const boxCount = countCandy(n);
    let box = '';
    boxCount.forEach(function (howMany, index) {
        let item = '<img alt=' + howMany + '" candies" class="img-responsive" src="images/candy-' + howMany + '.png">' + "\n";
        box = box.concat(item);
        if (index === 2) {
            box = box.concat("<br />\n");
        }
    });
    return box;
}

$(function () {

    const startButton = $('#start');
    const allButtons = $('button');

    function placeHtml(i, where, values) {
        let text = makeBox(values[i]);
        where.html(text);
    }

    function fixButtons(here) {
        allButtons.removeClass('alert-warning');
        allButtons.addClass('alert-info');
        here.addClass('alert-warning');
        here.removeClass('alert-info');
    }

    function allHtml(result) {
        $('div.placeholder').each(function (index) {
            let here = $(this);
            placeHtml(index, here, result);
        });
    }

    let distribution = [
            {start: 28, regressive: 27, proportional: 21, progressive: 10, redistribution: 10},
            {start: 13, regressive: 12, proportional: 10, progressive: 7, redistribution: 7},
            {start: 11, regressive: 10, proportional: 8, progressive: 6, redistribution: 6},
            {start: 8, regressive: 7, proportional: 6, progressive: 4, redistribution: 4},
            {start: 8, regressive: 7, proportional: 6, progressive: 4, redistribution: 4},
            {start: 7, regressive: 6, proportional: 5, progressive: 4, redistribution: 4},
            {start: 5, regressive: 4, proportional: 4, progressive: 3, redistribution: 3},
            {start: 5, regressive: 4, proportional: 4, progressive: 3, redistribution: 3},
            {start: 4, regressive: 3, proportional: 3, progressive: 3, redistribution: 3},
            {start: 3, regressive: 2, proportional: 2, progressive: 2, redistribution: 3},
            {start: 3, regressive: 2, proportional: 2, progressive: 2, redistribution: 3},
            {start: 2, regressive: 1, proportional: 2, progressive: 2, redistribution: 3},
            {start: 1, regressive: 0, proportional: 0, progressive: 1, redistribution: 3},
            {start: 1, regressive: 0, proportional: 0, progressive: 1, redistribution: 3},
            {start: 1, regressive: 0, proportional: 0, progressive: 1, redistribution: 3},
            {start: 0, regressive: 0, proportional: 0, progressive: 0, redistribution: 3}
        ]
    ;
    distribution.sort(function () {
        return 0.5 - Math.random()
    });
    let result = distribution.map(({start}) => start);
    allHtml(result);
    fixButtons(startButton);

    startButton.click(function () {
        let result = distribution.map(({start}) => start);
        allHtml(result);
        fixButtons($(this));
    });

    $('#regressive').click(function () {
        let result = distribution.map(({regressive}) => regressive);
        allHtml(result);
        fixButtons($(this));
    });

    $('#proportional').click(function () {
        let result = distribution.map(({proportional}) => proportional);
        allHtml(result);
        fixButtons($(this));
    });

    $('#progressive').click(function () {
        let result = distribution.map(({progressive}) => progressive);
        allHtml(result);
        fixButtons($(this));
    });

    $('#redistribution').click(function () {
        let result = distribution.map(({redistribution}) => redistribution);
        allHtml(result);
        fixButtons($(this));
    });

});