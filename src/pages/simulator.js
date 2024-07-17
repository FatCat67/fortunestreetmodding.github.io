var random_base_prices = [
    //-x00---  ---x10---  ---x20---  ---x30---  ---x40---  ---x50---  ---x60---  ---x70---  ---x80---  ---x90---
    [  0,  0], [  1,  1], [  2,  2], [  3,  3], [  4,  4], [  5,  5], [  6,  7], [  7,  8], [  8, 10], [  9, 11], // 0xx
    [ 10, 14], [ 11, 16], [ 12, 17], [ 13, 19], [ 15, 22], [ 17, 25], [ 19, 27], [ 21, 29], [ 23, 31], [ 25, 33], // 1xx
    [ 28, 35], [ 30, 37], [ 32, 39], [ 34, 42], [ 37, 44], [ 39, 46], [ 42, 48], [ 44, 51], [ 47, 53], [ 49, 55], // 2xx
    [ 52, 58], [ 54, 61], [ 57, 63], [ 59, 66], [ 62, 67], [ 64, 69], [ 66, 72], [ 68, 75], [ 70, 77], [ 72, 79], // 3xx
    [ 74, 81], [ 76, 83], [ 78, 85], [ 80, 86], [ 82, 88], [ 84, 90], [ 87, 92], [ 89, 94], [ 91, 96], [ 94, 98], // 4xx
    [ 95,100], [ 98,103], [100,106], [102,108], [104,110], [107,113], [109,115], [111,117], [113,119], [116,122], // 5xx
    [118,124], [120,126], [122,128], [125,130], [127,132], [129,134], [131,136], [132,138], [134,140], [136,143], // 6xx
    [138,145], [140,147], [142,149], [144,151], [146,152], [149,154], [151,156], [153,158], [155,161], [157,163], // 7xx
    [159,165], [160,167], [163,170], [165,172], [168,174], [170,176], [173,179], [175,181], [177,183], [179,186], // 8xx
    [181,188], [184,191], [186,193], [189,196], [192,198], [195,200], [197,203], [199,205], [202,207], [204,210], // 9xx
    [207,214], [211,217], [215,220], [217,223], [219,225], [222,228], [225,231], [228,234], [231,237], [235,240], //10xx
    [238,244], [240,247], [242,250], [244,253], [246,256], [249,260], [252,263], [255,266], [258,269], [260,274], //11xx
    [263,277], [266,281], [270,285], [273,290], [276,295], [280,300] //------------------------------------------ //12xx
];
    
var prices_table_vanilla = [
        0,     0,     0,     0,     0,     0,     0,     0,     0,
    0xA6D,0x5F61,0x7265,0x6128,0x3D25,0x7029,0x2069,0x7320,0x6E6F,
    0x7420,0x7661,0x6C69,0x6420,0x706F,0x696E,0x7465,0x722E,     0,
    0x100, 0x200, 0x3C0,     0,     0,     0,     0,     0,     0,
    0x100, 0x140, 0x280, 0x500,     0,     0,     0,     0,     0,
    0x100, 0x140, 0x200, 0x340, 0x600,     0,     0,     0,     0,
    0x100, 0x140, 0x200, 0x2C0, 0x440, 0x6C0,     0,     0,     0,
    0x100, 0x140, 0x1C0, 0x2C0, 0x3C0, 0x540, 0x780,     0,     0,
    0x100, 0x140, 0x1C0, 0x280, 0x380, 0x480, 0x600, 0x800,     0
];
var prices_table_csmm = [
        0,     0,     0,     0,     0,     0,     0,     0,     0,
    0x100,     0,     0,     0,     0,     0,     0,     0,     0,
    0x100, 0x200,     0,     0,     0,     0,     0,     0,     0,
    0x100, 0x180, 0x3C0,     0,     0,     0,     0,     0,     0,
    0x100, 0x140, 0x280, 0x500,     0,     0,     0,     0,     0,
    0x100, 0x140, 0x200, 0x340, 0x600,     0,     0,     0,     0,
    0x100, 0x140, 0x200, 0x2C0, 0x440, 0x6C0,     0,     0,     0,
    0x100, 0x140, 0x1C0, 0x2C0, 0x3C0, 0x540, 0x780,     0,     0,
    0x100, 0x140, 0x1C0, 0x280, 0x380, 0x480, 0x600, 0x800,     0
];
var prices_table = prices_table_csmm
var maxcap_table_vanilla = [
        0,     0,     0,     0,     0,     0,     0,     0,     0,
    0x100,     0,     0,     0,     0,     0,     0,     0,     0,
    0x100, 0x140,     0,     0,     0,     0,     0,     0,     0,
    0x200, 0x300, 0x600,     0,     0,     0,     0,     0,     0,
    0x180, 0x200, 0x400, 0xA00,     0,     0,     0,     0,     0,
    0x180, 0x200, 0x400, 0xA00, 0xC00,     0,     0,     0,     0,
    0x180, 0x200, 0x400, 0xA00, 0xC00, 0xE00,     0,     0,     0,
    0x180, 0x200, 0x400, 0xA00, 0xC00, 0xE00,0x1000,     0,     0,
    0x180, 0x200, 0x400, 0xA00, 0xC00, 0xE00,0x1000,0x1300,     0
];
var maxcap_table_csmm = [
        0,     0,     0,     0,     0,     0,     0,     0,     0,  
    0x200,     0,     0,     0,     0,     0,     0,     0,     0,
    0x180, 0x300,     0,     0,     0,     0,     0,     0,     0,
    0x180, 0x240, 0x600,     0,     0,     0,     0,     0,     0,
    0x180, 0x200, 0x400, 0xA00,     0,     0,     0,     0,     0,
    0x180, 0x200, 0x400, 0xA00, 0xC00,     0,     0,     0,     0,
    0x180, 0x200, 0x400, 0xA00, 0xC00 ,0xE00,     0,     0,     0,
    0x180, 0x200, 0x400, 0xA00, 0xC00, 0xE00,0x1000,     0,     0,
    0x180, 0x200, 0x400, 0xA00, 0xC00, 0xE00,0x1000,0x1300,     0
];
var maxcap_table = maxcap_table_csmm;
var price_rank_table = [
    [0, 1],
    [50, 2],
    [100, 3],
    [300, 4],
    [1000, 5],
    [3000, 6],
    [5000, 7],
];
var district = {};
function get_table_entry(owner) {
    if (owner < 0) return district.numshops * 9;
    return district.numshops * 9 + district.numshopsowned[owner] - 1;
}

function calc_shop_pri(s, te) {
    var v = (s.curvalue * 2 - s.basevalue) * s.baseprice;
    var mp = prices_table[te] >> 6;
    v = Math.floor(((v * mp) >> 2) / s.basevalue);
    if (v < 0) return 1;
    return v;
}

export function recalc() {
    district.stockbase = 0;
    district.numshops = 0;
    district.numshopsowned = [0, 0, 0, 0];

    for (var i = 0; i < 8; ++i) {
        var s = district.shops[i];

        var sval = parseInt(s.tx_svalue.value);
        var spri = parseInt(s.tx_sprice.value);
        if (!sval || !spri) {
            s.active = 0;
            s.basevalue = -1;
            // s.owner = -1;
            continue;
        }
        s.active = 1;
        ++district.numshops;
        if (s.owner >= 0 && s.owner <= 3) ++district.numshopsowned[s.owner];
        if (s.basevalue != sval || s.owner == -1) s.basevalue = s.curvalue = sval;
        s.baseprice = spri;
        district.stockbase += s.curvalue;
    }

    district.stockbase = Math.floor(district.stockbase / district.numshops);
    district.stockvalue = (district.stockbase * district.stockmulti) >> 16;

    for (var i = 0; i < 8; ++i) {
        var s = district.shops[i];
        if (!s.active) continue;

        var te = get_table_entry(s.owner);
        if (s.owner != -1) s.maxcapital = ((s.basevalue * maxcap_table[te]) >> 8) - s.curvalue;
        else s.maxcapital = 0;
        if (s.maxcapital < 0) s.maxcapital = 0;

        s.curprice = calc_shop_pri(s, te);
    }

    recalc_display();
}

function recalc_display() {
    for (var i = 0; i < 8; ++i) {
        var s = district.shops[i];
        s.tx_boughtbox.className = 'hidden';
        s.tx_infobox.className = 'hidden';
        if (!s.active) continue;

        if (s.owner != -1) s.tx_boughtbox.className = '';
        s.tx_infobox.style = '';

        if (s.owner == -1) {
            s.tx_infobox.className = 'unowned';
            s.tx_info_img.className = 'unowned';
        } else {
            s.tx_infobox.className = 'player-' + s.owner;
            s.tx_info_img.className = 'player-' + s.owner;
        }

        for (var j = 0; j < price_rank_table.length; j++) {
            let price = price_rank_table[j][0];
            let rank = price_rank_table[j][1];
            if (s.curprice >= price) {
                s.tx_info_img.src = `/images/simulator/shop_${rank}.png`;
            }
        }

        s.tx_info_price.innerHTML = s.curprice;
        s.tx_info_value.innerHTML = s.curvalue;
        s.tx_info_maxcap.innerHTML = s.maxcapital;

        if (s.maxcapital > 999) s.tx_invest.value = 999;
        else s.tx_invest.value = s.maxcapital;
    }
    district.tx_stocks.innerHTML = district.stockvalue;
}

export function setup() {
    var sl = [];
    for (var i = 1; i <= 8; ++i) {
        sl[i - 1] = {};
        sl[i - 1].tx_svalue = document.getElementById('shop' + i + '_value');
        sl[i - 1].tx_sprice = document.getElementById('shop' + i + '_price');
        sl[i - 1].tx_infobox = document.getElementById('shop' + i + '_info');
        sl[i - 1].tx_boughtbox = document.getElementById('shop' + i + '_bought');
        sl[i - 1].tx_info_img = document.getElementById('shop' + i + '_info_img');
        sl[i - 1].tx_info_price = document.getElementById('shop' + i + '_info_price');
        sl[i - 1].tx_info_value = document.getElementById('shop' + i + '_info_value');
        sl[i - 1].tx_info_maxcap = document.getElementById('shop' + i + '_info_maxcap');
        sl[i - 1].tx_invest = document.getElementById('shop' + i + '_invest');

        sl[i - 1].owner = -1;
        sl[i - 1].basevalue = 0;
        sl[i - 1].baseprice = 0;
        sl[i - 1].curvalue = 0;
        sl[i - 1].curprice = 0;
        sl[i - 1].maxcapital = 0;
        sl[i - 1].rank = 0;
        sl[i - 1].active = 0;
    }
    district.shops = sl;
    district.numshops = 0;
    district.numshopsowned = [0, 0, 0, 0];
    district.stockbase = 0;
    district.stockmulti = 0xb00;
    district.stockvalue = 0;
    district.tx_stocks = document.getElementById('stocks');

    // Force random vars to set amount, then run random
    document.getElementById('r-vmin').value = 90;
    document.getElementById('r-vmax').value = 550;
    document.getElementById('r-smin').value = 4;
    document.getElementById('r-smax').value = 6;
    document.getElementById('r-target').value = 10;
    document.getElementById('r-dupes').checked = false;
    document.getElementById('r-pnorm').checked = true;
    document.getElementById('r-plow').checked = false;
    document.getElementById('r-phi').checked = false;

    randomize();
}

export function set_owner(i, j) {
    district.shops[i].owner = j;
    recalc();
}

export function invest(i) {
    var s = district.shops[i];
    var parse = parseInt(s.tx_invest.value);
    if (!parse || s.maxcapital <= 0) return;
    if (parse > s.maxcapital) parse = s.maxcapital;
    if (parse > 999) parse = 999;

    s.curvalue += parse;
    recalc();
}

export function set_vanilla() {
    maxcap_table = maxcap_table_vanilla;
    prices_table = prices_table_vanilla;
    recalc();
}

export function set_csmm() {
    maxcap_table = maxcap_table_csmm;
    prices_table = prices_table_csmm;
    recalc();
}

function randrange(a, b) {
    return Math.floor(Math.random() * (b - a + 1) + a);
}

function get_random_price(value, mode) {
    //value = Math.floor(value / 10);
    if (value < 0 || value > 125) return 0;
    var a = random_base_prices[value][0];
    var b = random_base_prices[value][1];

    var result1 = randrange(a, b);
    if (mode == 0) return result1;
    var result2 = randrange(a, b);
    if ((mode == -1 && result1 < result2) || (mode == 1 && result1 > result2)) return result1;
    return result2;
}

function get_random_values(vmin, vmax, smin, smax, target, dupes) {
    var recip = 0x001745d1; // Reciprocal of the starting stock multiplier

    var numshops = randrange(smin, smax);

    var a = ((target * recip) >> 16) + 1;
    var b = ((target + 1) * recip) >> 16;
    a = Math.floor((a * numshops + 9) / 10);
    b = Math.floor((b * numshops) / 10);

    var ourtarget = randrange(a, b);
    if (vmin * numshops > ourtarget) return -1;
    if (vmax * numshops < ourtarget) return -1;

    var numbers = [];
    var buffer = vmin * (numshops - 1);
    var total = 0;
    var fail = 0;
    var nextnummax;
    var nextnummin;
    var realnumbers = [];

    for (var tries = 10000; tries; --tries) {
        numbers = [];
        buffer = vmin * (numshops - 1);
        total = 0;

        fail = 0;
        for (var i = 0; i < numshops - 1; ++i) {
            nextnummin = total + vmin;
            nextnummax = total + vmax;
            if (total + vmax > ourtarget - buffer) nextnummax = ourtarget - buffer;
            numbers[i] = randrange(nextnummin, nextnummax);
            total = numbers[i];
            buffer -= vmin;
        }
        numbers[i] = ourtarget;

        realnumbers = [];
        realnumbers[0] = numbers[0];
        for (var i = 1; i < numbers.length; ++i) {
            realnumbers[i] = numbers[i] - numbers[i - 1];
            if (realnumbers[i] > vmax) {
                fail = 1;
                break;
            } else if (!dupes) {
                for (var j = 0; j < i; ++j) {
                    if (realnumbers[j] == realnumbers[i]) {
                        fail = 1;
                        break;
                    }
                }
            }
        }
        if (!fail) break;
    }
    if (fail) return -2;

    return realnumbers;
}

export function randomize() {
    var tx_vmin = document.getElementById('r-vmin');
    var tx_vmax = document.getElementById('r-vmax');
    var tx_smin = document.getElementById('r-smin');
    var tx_smax = document.getElementById('r-smax');
    var tx_target = document.getElementById('r-target');
    var tx_dupes = document.getElementById('r-dupes');
    var tx_plow = document.getElementById('r-plow');
    var tx_phi = document.getElementById('r-phi');
    var tx_error = document.getElementById('r-error');

    var rand_mode = 0;
    if (tx_plow.checked) rand_mode = -1;
    if (tx_phi.checked) rand_mode = 1;

    var dupes = 0;
    if (tx_dupes.checked) dupes = 1;

    var vmin = parseInt(tx_vmin.value);
    var vmax = parseInt(tx_vmax.value);
    var smin = parseInt(tx_smin.value);
    var smax = parseInt(tx_smax.value);
    var target = parseInt(tx_target.value);
    if (!vmin || !vmax || !smin || !smax || !target) {
        tx_error.innerHTML = 'An input is missing.';
        return;
    }

    vmin = Math.floor((vmin + 9) / 10);
    vmax = Math.floor(vmax / 10);

    if (vmin >= vmax) {
        tx_error.innerHTML = 'Shop value minimum is greater than (or equal to) maximum.';
        return;
    }
    if (prices_table == prices_table_vanilla) {
        if (smin < 3) smin = 3;
        if (smax > 8) smax = 8;
    } else {
        if (smin < 1) smin = 1;
        if (smax > 8) smax = 8;
    }
    if (smin > smax) {
        tx_error.innerHTML = 'Shop count minimum is greater than maximum.';
        return;
    }
    if (target <= 2 || target > 50) {
        tx_error.innerHTML = 'Target stock price is constrained from 3 to 50 for sanity purposes.';
        return;
    }

    var shop_values = get_random_values(vmin, vmax, smin, smax, target, dupes);
    if (shop_values === -1) {
        tx_error.innerHTML = 'Criteria impossible to meet.';
        return;
    }
    if (shop_values === -2) {
        tx_error.innerHTML = "Took too long to come up with a reasonable result.<br>Loosen the randomizer's criteria or try again.";
        return;
    }
    for (var i = 0; i < 8; ++i) {
        district.shops[i].basevalue = -1;
        // district.shops[i].owner = -1;
        if (i >= shop_values.length) district.shops[i].tx_svalue.value = district.shops[i].tx_sprice.value = '';
        else {
            district.shops[i].tx_svalue.value = shop_values[i] * 10;
            district.shops[i].tx_sprice.value = get_random_price(shop_values[i], rand_mode);
        }
    }
    tx_error.innerHTML = '';
    recalc();
}
