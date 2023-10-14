class Elem {
  /*megjelenítés */
  constructor(szuloElem) {
    /*adattagok beállítás*/
    this.szuloElem = szuloElem;
    this.allapot = true;
    this.#htmlOsszeallit(); /*this - konkrét osztály példányra mutat*/
    this.divElem = this.szuloElem.children("div:last-child");
    this.pElem = this.divElem.children("p");
    this.divElem.on("click", () => {
      if (this.allapot == true) {
        this.#esemenyTrigger("elemKivalaszt");
        this.allapot = false;
      }

      //this.setErtek("X");
    });
  }
  setErtek(ertek) {
    this.pElem.html(ertek);
  }
  #htmlOsszeallit() {
    let txt = "<div class='elem'><p></p></div>";
    this.szuloElem.append(txt);
  }
  /* saját esemény létrehozása
  az osztály információkat ad át saját magáról*/
  #esemenyTrigger(esemenyNev) {
    const esemenyem = new CustomEvent(esemenyNev, { detail: this });
    window.dispatchEvent(esemenyem);
  }
}

export default Elem;
