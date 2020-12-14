let count = 0;

function _(id) {
    return document.getElementById(id)
}

function decrement() {
    count -= 1
    _('count').innerHTML = count
}

function increment() {
    count += 1
    _('count').innerHTML = count
}
