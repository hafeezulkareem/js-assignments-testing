let count = 0;

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

function saveCount() {
   localStorage.setItem("count", count);
}
function restoreCount() {
   const restoredCountValue = localStorage.getItem("count");
   if (restoredCountValue) {
      count = parseInt(restoredCountValue, 10);
      _("count").innerHTML = restoredCountValue;
   }
}
