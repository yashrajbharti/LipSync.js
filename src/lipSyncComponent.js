const template = document.createElement("template");
template.innerHTML = `
    <style>
    @layer mouth, tongue, teeth;

    .mouth,
    .tongue,
    .teeth {
        transition: 0.3s ease;
    }

    [data-letters="aei"] {
        @layer mouth {
            &.mouth {
                position: relative;
                background-color: #b63c2c;
                overflow: hidden;
                inline-size: 80px;
                block-size: 40px;
                border-radius: 45% 55% 50% 50% / 0% 0% 100% 100%;
                transition: border-radius 0.3s ease;
            }
        }

        @layer tongue {
            .tongue {
                position: absolute;
                inset-block-end: -5px;
                inline-size: 30px;
                block-size: 25px;
                background-color: #ef7d4a;
                border-radius: 51% 49% 54% 46% / 34% 39% 61% 66%;
                transition: border-radius 0.3s ease;

                &.left-part {
                    inset-inline-start: 20%;
                }

                &.right-part {
                    inset-inline-end: 20%;
                }
            }
        }

        @layer teeth {
            .teeth {
                position: absolute;
                inline-size: 70px;
                block-size: 10px;
                background-color: #fffffd;
                inset-inline-start: 5px;

                &.upper-part {
                    inset-block-start: -2px;
                    border-radius: 0 0 80px 80px;
                }

                &.lower-part {
                    inset-block-end: 0;
                }
            }
        }
    }

    [data-letters="bmp"] {
        @layer mouth {
            &.mouth {
                position: relative;
                background-color: #b63c2c;
                overflow: hidden;
                inline-size: 80px;
                block-size: 8px;
                border-radius: 49% 51% 51% 50% / 45% 44% 56% 55%;
            }
        }

        @layer tongue {
            .tongue {
                position: absolute;
                inset-block-end: -40px;
                inline-size: 30px;
                block-size: 40px;
                background-color: #ef7d4a;
                border-radius: 51% 49% 54% 46% / 34% 39% 61% 66%;

                &.left-part {
                    inset-inline-start: 20%;
                }

                &.right-part {
                    inset-inline-end: 20%;
                }
            }
        }

        @layer teeth {
            .teeth {
                position: absolute;
                inline-size: 80px;
                block-size: 30px;
                background-color: #fffffd;
                inset-inline-start: 0;

                &.upper-part {
                    inset-block-start: -40px;
                    border-radius: 0 0 80% 80%;
                }

                &.lower-part {
                    inset-block-end: -45px;
                    border-radius: 0;
                }
            }
        }
    }

    [data-letters="cdgknstxyz"] {
        @layer mouth {
            &.mouth {
                position: relative;
                background-color: #b63c2c;
                overflow: hidden;
                inline-size: 80px;
                block-size: 24px;
                border-radius: 100% 100% 100% 100% / 100% 100% 100% 100%;
            }
        }

        @layer tongue {
            .tongue {
                position: absolute;
                inset-block-end: -8px;
                inline-size: 36px;
                block-size: 20px;
                background-color: #ef7d4a;
                border-radius: 51% 49% 54% 46% / 34% 39% 61% 66%;

                &.left-part {
                    inset-inline-start: 20%;
                }

                &.right-part {
                    inset-inline-end: 20%;
                }
            }
        }

        @layer teeth {
            .teeth {
                position: absolute;
                inline-size: 80px;
                block-size: 20px;
                background-color: #fffffd;
                inset-inline-start: 0;

                &.upper-part {
                    inset-block-start: -10px;
                    border-radius: 0 0 80% 80%;
                }

                &.lower-part {
                    inset-block-end: -13px;
                    border-radius: 0;
                }
            }
        }
    }

    [data-letters="chjsh"] {
        @layer mouth {
            &.mouth {
                position: relative;
                background-color: #b63c2c;
                overflow: hidden;
                inline-size: 80px;
                block-size: 30px;
                border-radius: 49% 50% 8% 8% / 87% 87% 10% 11%;
            }
        }

        @layer tongue {
            .tongue {
                position: absolute;
                inset-block-end: -10px;
                inline-size: 30px;
                block-size: 25px;
                background-color: #ef7d4a;
                border-radius: 51% 49% 54% 46% / 34% 39% 61% 66%;

                &.left-part {
                    inset-inline-start: 20%;
                }

                &.right-part {
                    inset-inline-end: 20%;
                }
            }
        }

        @layer teeth {
            .teeth {
                position: absolute;
                inline-size: 80px;
                block-size: 12px;
                background-color: #fffffd;
                inset-inline-start: 0px;

                &.upper-part {
                    inset-block-start: 0;
                    border-radius: 50%;
                }

                &.lower-part {
                    inset-block-end: -5px;
                    border-radius: 20px 20px 0 0;
                }
            }
        }
    }

    [data-letters="ee"] {
        @layer mouth {
            &.mouth {
                position: relative;
                background-color: #b63c2c;
                overflow: hidden;
                inline-size: 80px;
                block-size: 24px;
                border-radius: 39% 40% 51% 50% / 9% 9% 91% 91%;
            }
        }

        @layer tongue {
            .tongue {
                position: absolute;
                inset-block-end: -8px;
                inline-size: 30px;
                block-size: 20px;
                background-color: #ef7d4a;
                border-radius: 51% 49% 54% 46% / 34% 39% 61% 66%;

                &.left-part {
                    inset-inline-start: 20%;
                }

                &.right-part {
                    inset-inline-end: 20%;
                }
            }
        }

        @layer teeth {
            .teeth {
                position: absolute;
                inline-size: 80px;
                block-size: 20px;
                background-color: #fffffd;
                inset-inline-start: 0;

                &.upper-part {
                    inset-block-start: -10px;
                    border-radius: 0 0 80% 80%;
                }

                &.lower-part {
                    inset-block-end: -15px;
                    border-radius: 0;
                }
            }
        }
    }

    [data-letters="fv"] {
        @layer mouth {
            &.mouth {
                position: relative;
                background-color: #b63c2c;
                overflow: hidden;
                inline-size: 80px;
                block-size: 20px;
                border-radius: 45% 55% 49% 51% / 15% 15% 85% 85%;
            }
        }

        @layer tongue {
            .tongue {
                position: absolute;
                inset-block-end: -25px;
                inline-size: 30px;
                block-size: 25px;
                background-color: #ef7d4a;
                border-radius: 51% 49% 54% 46% / 34% 39% 61% 66%;

                &.left-part {
                    inset-inline-start: 20%;
                }

                &.right-part {
                    inset-inline-end: 20%;
                }
            }
        }

        @layer teeth {
            .teeth {
                position: absolute;
                inline-size: 70px;
                block-size: 10px;
                background-color: #fffffd;
                inset-inline-start: 5px;

                &.upper-part {
                    inset-block-start: 0;
                    border-radius: 0 0 80px 80px;
                }

                &.lower-part {
                    inset-block-end: -20px;
                }
            }
        }
    }

    [data-letters="l"] {
        @layer mouth {
            &.mouth {
                position: relative;
                background-color: #b63c2c;
                overflow: hidden;
                inline-size: 80px;
                block-size: 40px;
                border-radius: 100% 100% 100% 100% / 100% 100% 100% 100%;
            }
        }

        @layer tongue {
            .tongue {
                position: absolute;
                inset-block-end: -2px;
                inline-size: 32px;
                block-size: 20px;
                background-color: #ef7d4a;
                border-radius: 51% 49% 54% 46% / 34% 39% 61% 66%;

                &.left-part {
                    inset-inline-start: 20%;
                }

                &.right-part {
                    inset-inline-end: 20%;
                }
            }
        }

        @layer teeth {
            .teeth {
                position: absolute;
                inline-size: 70px;
                block-size: 20px;
                background-color: #fffffd;
                inset-inline-start: 5px;

                &.upper-part {
                    inset-block-start: -2px;
                    border-radius: 0 0 80% 80%;
                }

                &.lower-part {
                    inset-block-end: -10px;
                    border-radius: 50% 50% 0 0;
                }
            }
        }
    }

    [data-letters="o"] {
        @layer mouth {
            &.mouth {
                position: relative;
                background-color: #b63c2c;
                overflow: hidden;
                inline-size: 75px;
                block-size: 80px;
                border-radius: 49% 51% 51% 50% / 45% 44% 56% 55%;
            }
        }

        @layer tongue {
            .tongue {
                position: absolute;
                inset-block-end: -5px;
                inline-size: 30px;
                block-size: 40px;
                background-color: #ef7d4a;
                border-radius: 51% 49% 54% 46% / 34% 39% 61% 66%;

                &.left-part {
                    inset-inline-start: 20%;
                }

                &.right-part {
                    inset-inline-end: 20%;
                }
            }
        }

        @layer teeth {
            .teeth {
                position: absolute;
                inline-size: 80px;
                block-size: 30px;
                background-color: #fffffd;
                inset-inline-start: 0;

                &.upper-part {
                    inset-block-start: -10px;
                    border-radius: 0 0 80% 80%;
                }

                &.lower-part {
                    inset-block-end: -15px;
                    border-radius: 0;
                }
            }
        }
    }

    [data-letters="qw"] {
        @layer mouth {
            &.mouth {
                position: relative;
                background-color: #b63c2c;
                overflow: hidden;
                inline-size: 85px;
                block-size: 32px;
                border-radius: 45% 55% 50% 50% / 10% 10% 100% 100%;
            }
        }

        @layer tongue {
            .tongue {
                position: absolute;
                inset-block-end: -10px;
                inline-size: 30px;
                block-size: 25px;
                background-color: #ef7d4a;
                border-radius: 51% 49% 54% 46% / 34% 39% 61% 66%;

                &.left-part {
                    inset-inline-start: 20%;
                }

                &.right-part {
                    inset-inline-end: 20%;
                }
            }
        }

        @layer teeth {
            .teeth {
                position: absolute;
                inline-size: 85px;
                block-size: 12px;
                background-color: #fffffd;
                inset-inline-start: 0px;

                &.upper-part {
                    inset-block-start: 0px;
                    border-radius: 0 0 80px 80px;
                }

                &.lower-part {
                    inset-block-end: -12px;
                }
            }
        }
    }

    [data-letters="r"] {
        @layer mouth {
            &.mouth {
                position: relative;
                background-color: #b63c2c;
                overflow: hidden;
                inline-size: 80px;
                block-size: 30px;
                border-radius: 49% 50% 18% 20% / 74% 79% 20% 23%;
            }
        }

        @layer tongue {
            .tongue {
                position: absolute;
                inset-block-end: -8px;
                inline-size: 30px;
                block-size: 20px;
                background-color: #ef7d4a;
                border-radius: 51% 49% 54% 46% / 34% 39% 61% 66%;

                &.left-part {
                    inset-inline-start: 20%;
                }

                &.right-part {
                    inset-inline-end: 20%;
                }
            }
        }

        @layer teeth {
            .teeth {
                position: absolute;
                inline-size: 80px;
                block-size: 12px;
                background-color: #fffffd;
                inset-inline-start: 0px;

                &.upper-part {
                    inset-block-start: 0;
                }

                &.lower-part {
                    inset-block-end: 0;
                    border-radius: 50% 50% 0 0;
                }
            }
        }
    }

    [data-letters="th"] {
        @layer mouth {
            &.mouth {
                position: relative;
                background-color: #b63c2c;
                overflow: hidden;
                inline-size: 80px;
                block-size: 24px;
                border-radius: 100% 100% 100% 100% / 100% 100% 100% 100%;
            }
        }

        @layer tongue {
            .tongue {
                position: absolute;
                inset-block-end: -2px;
                inline-size: 32px;
                block-size: 20px;
                background-color: #ef7d4a;
                border-radius: 51% 49% 54% 46% / 34% 39% 61% 66%;

                &.left-part {
                    inset-inline-start: 20%;
                }

                &.right-part {
                    inset-inline-end: 20%;
                }
            }
        }

        @layer teeth {
            .teeth {
                position: absolute;
                inline-size: 75px;
                block-size: 20px;
                background-color: #fffffd;
                inset-inline-start: 0px;

                &.upper-part {
                    inset-block-start: -10px;
                    border-radius: 0 0 80% 80%;
                }

                &.lower-part {
                    inset-block-end: -10px;
                    border-radius: 50% 50% 0 0;
                }
            }
        }
    }

    [data-letters="u"] {
        @layer mouth {
            &.mouth {
                position: relative;
                background-color: #b63c2c;
                overflow: hidden;
                inline-size: 80px;
                block-size: 30px;
                border-radius: 49% 50% 18% 20% / 74% 79% 20% 23%;
            }
        }

        @layer tongue {
            .tongue {
                position: absolute;
                inset-block-end: -8px;
                inline-size: 30px;
                block-size: 20px;
                background-color: #ef7d4a;
                border-radius: 51% 49% 54% 46% / 34% 39% 61% 66%;

                &.left-part {
                    inset-inline-start: 20%;
                }

                &.right-part {
                    inset-inline-end: 20%;
                }
            }
        }

        @layer teeth {
            .teeth {
                position: absolute;
                inline-size: 80px;
                block-size: 12px;
                background-color: #fffffd;
                inset-inline-start: 0px;

                &.upper-part {
                    inset-block-start: 0;
                }

                &.lower-part {
                    inset-block-end: -5px;
                    border-radius: 50%;
                }
            }
        }
    }

    @layer eye, iris, pupil, light;

    .eyes {
        display: flex;
        gap: 20px;
        justify-content: center;
        margin: auto;
    }

    @layer eye {
        .eye {
            position: relative;
            inline-size: 30px;
            block-size: 40px;
            margin-block-end: 16px;
            border-radius: 50%;
            background-color: #fffffd;
            overflow: hidden;

            &.left-eye {
                rotate: -10deg;
            }

            &.right-eye {
                rotate: 10deg;
            }
        }
    }

    @layer iris {
        .iris {
            position: absolute;
            inline-size: 26px;
            block-size: 36px;
            background-color: #A085CD;
            border-radius: 50%;

            &.left-iris {
                inset-inline-end: -2px;
                inset-block-end: -2px;
            }

            &.right-iris {
                inset-inline-start: -2px;
                inset-block-end: -2px;
            }
        }
    }

    @layer pupil {
        .pupil {
            position: absolute;
            inline-size: 10px;
            block-size: 15px;
            background-color: #000;
            border-radius: 50%;

            &.left-pupil {
                inset-inline-end: 5px;
                inset-block-end: 8px;
                rotate: 15deg;
            }

            &.right-pupil {
                inset-inline-start: 5px;
                inset-block-end: 8px;
                rotate: -15deg;
            }
        }
    }

    @layer light {
        .light {
            position: absolute;
            inline-size: 6px;
            block-size: 6px;
            background-color: #fffffd;
            border-radius: 50%;

            &.left-light {
                inset-inline-end: 7px;
                inset-block-end: 14px;
            }

            &.right-light {
                inset-inline-start: 7px;
                inset-block-end: 14px;
            }
        }
    }
    </style>    
    <div class="face">
        <div class="mouth" data-letters="aei">
            <div class="tongue left-part"></div>
            <div class="tongue right-part"></div>
            <div class="teeth upper-part"></div>
            <div class="teeth lower-part"></div>
        </div>
    </div>
    `;

class LipSync extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }
  static get observedAttributes() {
    return ["data-letters"];
  }
  attributeChangedCallback(name, oldValue, newValue) {
    if (name === "data-letters") {
      this.shadowRoot.querySelector(".mouth").setAttribute(name, newValue);
    }
  }
}

customElements.define("lip-sync", LipSync);
