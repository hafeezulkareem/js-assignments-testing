let count = 0,
  timeAmount = 1000,
  timerId = undefined;

_("count").innerHTML = count;

function _(id) {
  return document.getElementById(id);
}

function decrement() {
  count -= 1;
  _("count").innerHTML = count;
}

function increment() {
  count += 1;
  _("count").innerHTML = count;
}

function startIncrementor() {
  stopIncrementor();
  timerId = setInterval(increment, timeAmount);
}

function stopIncrementor() {
  clearInterval(timerId);
  timerId = undefined;
}
