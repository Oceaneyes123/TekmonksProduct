<template>
    <v-container fluid class="px-0 py-0">
        <v-img src="../assets/api400/api400-orange-bg.png">
            <v-container>
                <v-row>
                    <v-col class="d-flex align-center display-3 font-weight-bold">
                        <div> 
                            <div style="color:#1B5775">
                                Peaceful Journey
                            </div> 
                            <div class="white--text">
                                To the Digital Marketplace
                            </div>
                            <v-btn outlined class="rounded-lg mt-5" x-large>Schedule a demo <v-icon class="pl-3">fas fa-long-arrow-right</i></v-icon></v-btn>
                        </div>
                    </v-col>
                    <v-col>
                        <v-img src="../assets/api400/api400-orange-img.png"></v-img>
                    </v-col>
                </v-row>
            </v-container>
        </v-img>
         <v-img src="../assets/api400/api400-white-bg.png">
            <v-container style="height:100%">
                <v-row style="height:100%">
                    <v-col class="d-flex align-center  pl-5">
                        <div style="padding-bottom:100px">
                            <div class="font-weight-black display-4">Your</div>
                            <div class="font-weight-bold display-3" style="color:#F3712C;">Green <br> Screens</div>
                            <div  class="font-weight-bold display-3">Workplace</div>
                        </div>
                    </v-col>
                    <v-col class="d-flex align-center justify-center">
                       <div>
                            <v-carousel v-model="model" hide-delimiters hide-arrow-background height="200px">
                                 <template v-slot:prev="{ on, attrs }">
                                    <v-icon  v-bind="attrs" v-on="on" color="black">
                                        fas fa-chevron-circle-left
                                    </v-icon>
                                </template>
                                <template v-slot:next="{ on, attrs }">
                                    <v-icon v-bind="attrs" v-on="on"  color="black">
                                        fas fa-chevron-circle-right
                                    </v-icon>
                                </template>
                            <v-carousel-item
                                v-for="i in 4"
                                :key="i"
                                >
                                <div class="d-flex align-center px-15" style="height:100%">
                                        <div>
                                            <div class="text-h6 mb-5">
                                                Integration where you need it!
                                            </div>
                                            <div class="">
                                                With APIs and API/400’s secured gateway we have the access you need. Whether mobile, web interface, B2B program integration or IBM i Modernization, we can do it all.
                                            </div>
                                        </div>
                                </div>
                                </v-carousel-item>
                            </v-carousel>
                            <v-btn outlined class="rounded-lg mt-5 ml-15" large color="#F3712C">Schedule a demo <v-icon class="pl-3" color="#F3712C">fas fa-long-arrow-right</i></v-icon></v-btn>
                        </div>
                    </v-col>
                </v-row>
            </v-container>
        </v-img>

         <v-img src="../assets/api400/api400-blue-bg.png">
            <v-container style="height:100%;position:relative">
                <v-row style="height:100%">
                    <v-col class="d-flex align-center justify-center" >
                        <div>
                            <v-carousel v-model="model" hide-delimiters height="200px">
                                  <template v-slot:prev="{ on, attrs }">
                                    <v-icon  v-bind="attrs" v-on="on">
                                        fas fa-chevron-circle-left
                                    </v-icon>
                                </template>
                                <template v-slot:next="{ on, attrs }">
                                    <v-icon v-bind="attrs" v-on="on">
                                        fas fa-chevron-circle-right
                                    </v-icon>
                                </template>
                                <v-carousel-item
                                    v-for="i in 4"
                                    :key="i"
                                    >
                                <div class="d-flex align-center px-15" style="height:100%">
                                        <div>
                                            <div class="white--text text-h6 mb-5">
                                                No More Screen Scraping!
                                            </div>
                                            <div class="white--text">
                                                API/400 can access all the programs and information, not just those visible through 5250 screens, with our native integration.
                                            </div>
                                        </div>
                                </div>
                                </v-carousel-item>
                            </v-carousel>
                            <v-btn outlined class="rounded-lg mt-5 ml-15" large color="white">Schedule a demo <v-icon class="pl-3" color="white">fas fa-long-arrow-right</i></v-icon></v-btn>
                        </div>
                    </v-col>

                     <v-col class="d-flex">
                        <div class="pt-5">
                            <div class="font-weight-black display-3">Let API/400 <br/> Unlock Your </div>
                            <div class="font-weight-bold display-4" style="color:#F3712C;">IBM i</div>
                            <img src="../assets/api400/api400-blue-img.png" alt="" width="500" style="position:absolute;bottom:0">
                        </div>
                        
                    </v-col>
                </v-row>
            </v-container>
        </v-img>

        <v-img src="../assets/api400/api400-black-bg.png">
            <v-container style="height:100%;position:relative" fluid class="px-0 py-0" >
                <v-row style="height:100%">
                    <v-col>
                        <img src="../assets/api400/api400-black-img.png" height="400" style="position:absolute;bottom:0"></img>
                    </v-col>
                     <v-col class="d-flex align-center">
                       <div>
                            <div class="white--text font-weight-black display-3">Light Weight</div>
                            <div style="color:#F3712C;" class="font-weight-black display-3">Heavy Duty</div>
                             <v-btn class="rounded-lg mt-5 white--text" large color="#1B5775">Schedule a demo <v-icon class="pl-3" color="white">fas fa-long-arrow-right</i></v-icon></v-btn>
                       </div>
                    </v-col>
                </v-row>
            </v-container>
        </v-img>



    </v-container>
</template>

<script>
export default {
    data(){
        return{
            model: 0,
        }
    }
}
</script>