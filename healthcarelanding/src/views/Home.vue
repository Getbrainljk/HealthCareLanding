<template>
    <v-card color="white" flat tile>
        <div class="home">
            <v-row no-gutters>
                <v-col cols="6" md="3"></v-col>
                <v-col cols="12" sm="6" md="8"></v-col>
            </v-row>
        </div>
        <v-carousel
            cycle
            height="100"
            hide-delimiter-background="true"
            show-arrows-on-hover
            hide-delimiters
        >
            <v-carousel-item v-for="(slide, i) in slides" :key="i">
                <v-sheet :color="colors[i]" height="100%">
                    <v-row class="fill-height" align="center" justify="center">
                        <div class="display-1">{{ slide }}</div>
                    </v-row>
                </v-sheet>
            </v-carousel-item>
        </v-carousel>
        <br />
        <br />

        <v-container>
            <v-row>
                <v-col order="12">
                    <v-card>
                        <v-row align="center" justify="center">
                          <div class="container">
                            <v-img src="@/assets/images.jpg" max-width="600"></v-img>
  <div class="centered">CENTRE MEDICAL SIDI MOUSSA</div>
                          </div>
                        </v-row>
                    </v-card>
                </v-col>
                <v-col order="12">
                    <v-card class="mx-auto" max-width="344">
                        <v-card-text>
                            Nous vous accueillons au
                            44-46 Rue d’Amsterdam
                            75009 Paris
                            itinéraire
                            HORAIRES D’OUVERTURE :
                            Centre médical et dentaire :
                            lundi – vendredi : 8h00 – 19h00
                            samedi : 8h00 – 18h00
                            Laboratoire d’analyses :
                            lundi – vendredi : 7h30 – 19h00
                            samedi : 8h00 – 16h00
                            dimanche : 9h00 – 14h00 sur rdv
                            NOUS CONTACTER
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
        <v-container>
            <v-row no-gutters>
                <v-col>
                    <v-row align="center" justify="center">
                        <v-img src="@/assets/email.png" max-width="115"></v-img>
                        <v-text>
                            <h4 class="mtitle pt-5 pb-2">DOSSIER MEDICAL INFORMATISE</h4>
                            <div class="body-2">
                                Greyhound divisely hello coldly fonwderfully
                                Greyhound divisely helAEAllFZEllo c
                                oldly fonwderfullyoldly
                                oldly fonwderfullyoldly fonwderfullyoldly fonwderfully
                            </div>
                        </v-text>
                    </v-row>
                </v-col>
                <v-col order="12">
                    <v-row align="center" justify="center">
                        <v-img src="@/assets/calendar.png" max-width="115"></v-img>
                        <v-text>
                            <h4 class="mtitle pb-2 pt-5">PRISE EN CHARGE SIMPLE ET RAPIDE</h4>
                            <div class="body-2">
                                Greyhound divisely hello coldly fonwderfully
                                Greyhound divisely helAEAllFZEllo c
                                oldly fonwderfullyoldly
                                oldly fonwderfullyoldly fonwderfullyoldly fonwderfully
                            </div>
                        </v-text>
                    </v-row>
                </v-col>
                <v-col order="1">
                    <v-row align="center" justify="center">
                        <v-img src="@/assets/sheep.png" max-width="115"></v-img>
                        <v-text>
                            <h4 class="mtitle pt-5 pb-2">SOINS ACCESSIBLES A TOUS</h4>
                            <div class="body-2 pb-5">
                                Greyhound divisely hello coldly fonwderfully
                                Greyhound divisely helAEAllFZEllo c
                                oldly fonwderfullyoldly
                                oldly fonwderfullyoldly fonwderfullyoldly fonwderfully
                            </div>
                        </v-text>
                    </v-row>
                </v-col>
            </v-row>
        </v-container>
        <v-container>
            <v-row align="center" justify="center">
                <v-col order="24">
                    <v-btn color="warning" dark>PRENDRE RDV LIGNE</v-btn>
                </v-col>
            </v-row>
        </v-container>
        <v-container>
            <v-row align="center" justify="center">
                <v-col order="12">
                    <v-row align="center" justify="center">
                        <v-img src="@/assets/docteurcab.png" max-width="300" height="300"></v-img>
                    </v-row>
                </v-col>
                <v-col order="12" class="contactText">
                    <h4 class="mtitle" >DEPUIS LE 11 MAI :</h4>
                    <br />
                    <v-text>Les médecins du Centre vous reçoivent à nouveau en consultation sans restriction de motif, et dans des conditions adaptées à la situation sanitaire.</v-text>
                    <br />
                    <br />

                    <v-text>Vous pouvez prendre rendez-vous par téléphone au 01.42.81.93.33 ou sur notre plateforme en ligne pour consulter nos médecins généralistes et spécialistes.</v-text>
                    <br />
                    <br />

                    <v-text>Si vous ne préférez pas ou ne pouvez pas vous déplacer, vous pourrez toujours avoir recours à la télé-consultation, avec les praticiens du Centre.</v-text>

                    <br />
                </v-col>
            </v-row>
            <v-container>
                <v-row align="center" justify="center">
                    <v-col order="12">
                        <v-btn color="warning" dark>PRENDRE RDV EN LIGNE</v-btn>
                    </v-col>
                    <v-col order="12">
                        <v-btn rounded color="primary" dark>télé-consultER</v-btn>
                    </v-col>
                </v-row>
            </v-container>
        </v-container>
        <br />
        <br />
        <v-container>
            <v-row>
                <v-card class="mx-auto" color="#26c6da" dark max-width="400">
                    <v-col order="8">
                        <v-row align="center" justify="center">
                            <v-img src="@/assets/clock.png" max-width="115"></v-img>
                            <v-text>
                                <div
                                    class="body-2"
                                >Veuillez vous assurer d’être présents environ 15 minutes avant votre horaire de rendez-vous afin de remplir les formalités administratives au guichet.</div>
                                <br />
                                <div
                                    class="body-2"
                                >En effet, nous ne pourrons garantir le maintien de votre rendez-vous si vous vous présentez avec un retard trop important.</div>
                            </v-text>
                        </v-row>
                    </v-col>
                </v-card>

                <v-col order="1">
                    <v-card class="mx-auto" color="#26c6da" dark max-width="400">
                        <v-row align="center" justify="center">
                            <v-img src="@/assets/id-card.png" max-width="115"></v-img>
                            <v-text>
                                <div
                                    class="body-2"
                                >- N’oubliez pas d’apporter les documents suivants :</div>
                                <br />
                                <div class="body-2">– Carte vitale / attestation de Sécurité Sociale</div>
                                <div class="body-2">– Carte ou attestation de mutuelle</div>
                                <div class="body-2">– (Carte CMU ou attestation AME)</div>
                                <div class="body-2">– (Ordonnance ou prescription)</div>
                                <br />
                            </v-text>
                        </v-row>
                    </v-card>
                </v-col>
                <v-card class="mx-auto" color="#26c6da" dark max-width="400">
                    <v-col order="8">
                        <v-row align="center" justify="center">
                            <v-img src="@/assets/emergency.png" max-width="115"></v-img>
                            <v-text>
                                <div
                                    class="body-2 pb-5"
                                >Nous serons dans l’obligation de cesser de vous recevoir si vous ne vous présentez pas aux rendez-vous, ou en l’absence de vos papiers, à plus de 3 reprises.</div>
                                <div
                                    class="body-2 pb-5"
                                >Si vous rencontrez des difficultés administratives, n’hésitez pas à nous envoyer un message via le formulaire Contact</div>
                            </v-text>
                        </v-row>
                    </v-col>
                </v-card>
            </v-row>
        </v-container>
        <br />
        <br />
        <v-container>
            <v-row>
                <v-col order="12">
                    <v-card class="mx-auto" light>
                        <div class="body-2 pb-5">Venir au Centre Médical Sidi Moussa</div>
                        <div class="body-2 pb-5">au 44 - 46 rue d'Amsterdam, au cœur de Paris 9e,</div>
                        <div
                            class="body-2 pb-5"
                        >proche de la Gare St-Lazare. Emplacement très facile d'accès :</div>
                        <div class="body-2 pb-5">Métro : lignes 3 / 7 / 9 / 12 / 13 / 14</div>
                        <div class="body-2 pb-5">BUS : lignes 20 / 21 / 24 / 26 / 27 / 28 / 29 / 94</div>

                        <v-btn color="blue" href="https://www.google.com" dark>VOIR ITINERAIRE</v-btn>
                        <br />

                        <br />
                        <br />
                    </v-card>
                </v-col>
                <v-col order="12">
                    <v-card>
                        <v-row align="center" justify="center">
                            <v-img src="@/assets/Map.png" max-width="600"></v-img>
                        </v-row>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </v-card>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue';

export default {
    name: 'Home',
    components: {},
    data() {
        return {
            colors: [
                'red lighten',
                'red lighten',
                'red lighten',
                'red lighten',
                'red lighten'
            ],
            slides: [
                'INFO COVID-19',
                'FERMETURE EXCEPTIONNEL LE 0/0/2002',
                'DEPISTAGE COVID SANS ORDONNANCE',
                'PRISE DE RDV SANS ORDONNANCE',
                'METTEZ UN MASQUE BLABLA'
            ]
        };
    }
};
</script>
 
<style>
.contactText {
    font-size: 0.8em;
}
.v-card {
    border: none;
    text-align: center;
}
.mtitle {
    white-space: inherit;
    color: #1976d2;
}
.container {
  position: relative;
  text-align: center;
}

/* Bottom left text */
.bottom-left {
  position: absolute;
  bottom: 8px;
  left: 16px;
}

/* Top left text */
.top-left {
  position: absolute;
  top: 8px;
  left: 16px;
}

/* Top right text */
.top-right {
  position: absolute;
  top: 8px;
  right: 16px;
}

/* Bottom right text */
.bottom-right {
  position: absolute;
  bottom: 8px;
  right: 16px;
}

/* Centered text */
.centered {
  color: black;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
