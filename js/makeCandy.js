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

/**
 *
 * @param {number} n
 * @returns {string}
 */
function makeLineItem(n) {
    return '<img alt=' + n + '" candies" class="img-responsive" src="images/line-' + n + '.png">' + "\n";
}


const distribution = [
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

const government = [
    {id: 'defense', start: 0, regressive: 6, proportional: 6, progressive: 6, redistribution: 6},
    {id: 'education', start: 0, regressive: 2, proportional: 5, progressive: 5, redistribution: 5},
    {id: 'infrastructure', start: 0, regressive: 2, proportional: 6, progressive: 7, redistribution: 7},
    {id: 'healthcare', start: 0, regressive: 2, proportional: 6, progressive: 6, redistribution: 6},
    {id: 'general', start: 0, regressive: 3, proportional: 5, progressive: 5, redistribution: 5},
    {id: 'savings', start: 0, regressive: 0, proportional: 0, progressive: 18, redistribution: 6},
    {id: 'total', start: 0, regressive: 15, proportional: 28, progressive: 47, redistribution: 35}
]


$(function () {

    const startButton = $('#start');
    const allButtons = $('button');
    const textBox = $('#textBox');
    const modalTitle = $('#textBox .modal-title');
    const modalBody = $('#textBox .modal-body');

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

    function budget(taxation) {
        const defense = government.find(lineItem => lineItem.id === 'defense')[taxation];
        const education = government.find(lineItem => lineItem.id === 'education')[taxation];
        const infrastructure = government.find(lineItem => lineItem.id === 'infrastructure')[taxation];
        const healthcare = government.find(lineItem => lineItem.id === 'healthcare')[taxation];
        const general = government.find(lineItem => lineItem.id === 'general')[taxation];
        const savings = government.find(lineItem => lineItem.id === 'savings')[taxation];
        const total = government.find(lineItem => lineItem.id === 'total')[taxation];
        $('#defense').html(makeLineItem(defense));
        $('#education').html(makeLineItem(education));
        $('#infrastructure').html(makeLineItem(infrastructure));
        $('#healthcare').html(makeLineItem(healthcare));
        $('#general').html(makeLineItem(general));
        $('#savings').html(makeLineItem(savings));
        $('#total').html(total);
    }

    function initialize() {
        modalTitle.html('Candy &amp; Taxes');
        modalBody.html('<div style="font-size: xx-large">' +
            '<blockquote class="blockquote">&quot;Taxes are what we pay for civilized society.&quot;</blockquote><br>' +
            '<footer class="blockquote-footer"><cite>Supreme Court Justice Oliver Wendell Holmes, Jr. (1841–1935).</cite></footer>' +
            '</div>'
        );
        textBox.modal();
    }

    distribution.sort(function () {
        return 0.5 - Math.random()
    });
    let result = distribution.map(({start}) => start);
    allHtml(result);
    budget('start')
    fixButtons(startButton);
    initialize();

    startButton.click(function () {
        let result = distribution.map(({start}) => start);
        allHtml(result);
        budget('start')
        fixButtons($(this));
    });

    $('#regressive').click(function () {
        let result = distribution.map(({regressive}) => regressive);
        allHtml(result);
        modalTitle.html('Regressive Taxes');
        modalBody.html('<p>Every person pays the same amount, but those who have less income end up ' +
            'paying a much larger percentage of their income in taxes, while those with larger incomes pay a smaller ' +
            'percentage of their income in taxes</p>' +
            '<ul>' +
            '<li>Poor people pay a lot!</li>' +
            '<li>The rich become richer and richer</li>' +
            '<li>The government does not have what it needs to meet its needs</li>' +
            '<li>There are no services and the infrastructure crumbles</li>' +
            '</ul>'
        );
        textBox.modal();
        budget('regressive')
        fixButtons($(this));
    });

    $('#proportional').click(function () {
        let result = distribution.map(({proportional}) => proportional);
        allHtml(result);
        modalTitle.html('Proportional Taxes');
        modalBody.html('<p>Everyone pays the same percentage of income regardless of how much or how little income a person makes.</p>' +
            '<ul>' +
            '<li>People pay the same percent, but this is harder on the poor</li>' +
            '<li>The government does not have sufficient candy to meet society’s needs</li>' +
            '<li>There are no services and the infrastructure crumbles</li>' +
            '</ul>'
        );
        textBox.modal();
        budget('proportional')
        fixButtons($(this));
    });

    $('#progressive').click(function () {
        let result = distribution.map(({progressive}) => progressive);
        allHtml(result);
        modalTitle.html('Progressive Taxes');
        modalBody.html('<p>Those people with larger incomes pay a greater percentage of their income in taxes.</p>' +
            '<ul>' +
            '<li>The poor pay amounts that are affordable to them</li>' +
            '<li>The government has sufficient candy to meet society’s needs</li>' +
            '<li>The richest remain the richest even though they are paying higher taxes</li>' +
            '</ul>' +
            '<div class="loud">Notice how under progressive taxation, the U.S. would have <span class="punch">NO federal debt!</span> </div>'
        );
        textBox.modal();
        budget('progressive')
        fixButtons($(this));
    });

    $('#redistribution').click(function () {
        let result = distribution.map(({redistribution}) => redistribution);
        allHtml(result);
        modalTitle.html('Redistribution');
        modalBody.html('<p>If the government receives sufficient candy in taxes, it is possible to redistribute enough candy so everyone can have some.</p>' +
            '<ul>' +
            '<li>The government has sufficient candy to meet society’s needs</li>' +
            '<li>The richest remain the richest even though they are paying higher taxes</li>' +
            '</ul>' +
            '<div class="loud">Notice how under redistributive taxation, the U.S. would <span class="punch">STILL</span> have <span class="punch">NO federal debt!</span> </div>'
        );
        textBox.modal();
        budget('redistribution')
        fixButtons($(this));
    });

});