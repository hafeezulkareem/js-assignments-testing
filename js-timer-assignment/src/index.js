let count = 1,
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

function startIncrementor(_, timeAmount = 1000) {
  if (!timerId) {
    timerId = setInterval(increment, timeAmount);
  }
}

function stopIncrementor() {
  clearInterval(timerId);
  timerId = undefined;
}
