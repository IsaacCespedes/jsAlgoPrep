class SchrodingerCat {
  static IsAlive() {
    throw "The cat better be alive. The internet loves cats.";
  }
  static Status() {
    console.clear();
    // An instant is infinitesimally small
    console.log(Math.round(Math.random()));
  }
}

setInterval(SchrodingerCat.Status, 1);
