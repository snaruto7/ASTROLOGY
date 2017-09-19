/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

function sign(){
    var x=document.getElementById("month").value;
    var y=document.getElementById("date").value;

    if (x=="March" && (y>=21 && y<=31) || x=="April" && (y>=1 && y<=19) ){
        document.getElementById("trait").innerHTML="You are <b>Aries</b>";
    }
    else if(x=="April" && (y>=20 && y<=30) || x=="May" && (y>=1 && y<=20) ){
        document.getElementById("trait").innerHTML="You are <b>Taurus</b>";
    }
    else if(x=="May" && (y>=21 && y<=31) || x=="June" && (y>=1 && y<=20) ){
        document.getElementById("trait").innerHTML="You are <b>Gemini</b>";
    }
    else if(x=="June" && (y>=21 && y<=30) || x=="July" && (y>=1 && y<=22) ){
        document.getElementById("trait").innerHTML="You are <b>Cancer</b>";
    }
    else if(x=="July" && (y>=23 && y<=31) || x=="August" && (y>=1 && y<=22) ){
        document.getElementById("trait").innerHTML="You are <b>Leo</b>";
    }
    else if(x=="August" && (y>=23 && y<=31) || x=="September" && (y>=1 && y<=22) ){
        document.getElementById("trait").innerHTML="You are <b>Virgo</b>";
    }
    else if(x=="September" && (y>=23 && y<=30) || x=="October" && (y>=1 && y<=22) ){
        document.getElementById("trait").innerHTML="You are <b>Libra</b>";
    }
    else if(x=="October" && (y>=23 && y<=31) || x=="November" && (y>=1 && y<=21) ){
        document.getElementById("trait").innerHTML="You are <b>Scorpio</b>";
    }
    else if(x=="November" && (y>=22 && y<=30) || x=="December" && (y>=1 && y<=21) ){
        document.getElementById("trait").innerHTML="You are <b>Sagittarius</b>";
    }
    else if(x=="December" && (y>=22 && y<=31) || x=="January" && (y>=1 && y<=19) ){
        document.getElementById("trait").innerHTML="You are <b>Capricorn</b>";
    }
    else if(x=="January" && (y>=20 && y<=31) || x=="February" && (y>=1 && y<=18) ){
        document.getElementById("trait").innerHTML="You are <b>Aquarius</b>";
    }
    else if(x=="February" && (y>=19 && y<=28) || x=="March" && (y>=1 && y<=20) ){
        document.getElementById("trait").innerHTML="You are <b>Pisces</b>";
    }
    else{
        document.getElementById("trait").innerHTML="You are nothing.";
    }

}

function traits(){
    var x=document.getElementById("month").value;
    var y=document.getElementById("date").value;

    var Aries="Aries people are high-spirited, courageous, and independent - though they can turn sulky if they have to take orders";
    var Taurus="People born under the sign of Taurus are most noted for their dependability, patience and perseverance. These qualities often lead them to success in achieving their goals in life. ";
    var Gemini="Amusing, charming and witty, Gemini's are usually surrounded by many friends.";
    var Cancer="Cancerians can be kind, sympthetic, patient listeners";
    var Leo="Enthusiastic and generous, Leo's have a true love for life and the pleasures it offers. They rule their kingdoms (big or small) and thrive on drama and attention. ";
    var Virgo="Virgo is the sign of service and self-improvement. The symbol is a young woman gathering wheat. Virgo's harvest information and put what they learn to practical use.";
    var Libra="Libra is the sign of partnership. They are easy to like with a captivating charm and a gift of making others feel important. Born under the sign of the scales, Librans look for balance and harmony. ";
    var Scorpio="The sign of extremes, Scorpio people are a bundle of contradictions encompassing the best and worst in human nature. Scorpios need a positive avenue of expression or negative aspects such as brooding, jealousy and vengefulness may present themselves.  ";
    var Sagittarius="Optimistic Sagittarius appears to breeze through life. Ruled by Jupiter (planet of fortune), they always seem to be in the right place at the right time. Restless and independent they prize their freedom above all. ";
    var Capricorn="Capricorns are ambitious and motivated by a desire for success, status, money and position. Practical and patient, they are determined to succeed one way or another but they must learn, however, that the end never justifies the means.";
    var Aquarius="Aquarius are unorthodox, original people who refuse to follow the crowd. They are so determined not be like anyone else that they are sometimes contrary just to be different. They are independent thinkers with ambitions of doing something important and meaningful.";
    var Pisces="The last sign of the zodiac, Pisces is the sign of eternity, reincarnation and spiritual rebirth. Compassionate and fairminded Pisces have the ability to see deep into the human psyche. Intuitive and sensitive, others would be wise to pay attention to their hunches.";

    if (x=="March" && (y>=21 && y<=31) || x=="April" && (y>=1 && y<=19) ){
        document.getElementById("sign").innerHTML=Aries;
    }
    else if(x=="April" && (y>=20 && y<=30) || x=="May" && (y>=1 && y<=20) ){
        document.getElementById("sign").innerHTML=Taurus;
    }
    else if(x=="May" && (y>=21 && y<=31) || x=="June" && (y>=1 && y<=20) ){
        document.getElementById("sign").innerHTML=Gemini;
    }
    else if(x=="June" && (y>=21 && y<=30) || x=="July" && (y>=1 && y<=22) ){
        document.getElementById("sign").innerHTML=Cancer;
    }
    else if(x=="July" && (y>=23 && y<=31) || x=="August" && (y>=1 && y<=22) ){
        document.getElementById("sign").innerHTML=Leo;
    }
    else if(x=="August" && (y>=23 && y<=31) || x=="September" && (y>=1 && y<=22) ){
        document.getElementById("sign").innerHTML=Virgo;
    }
    else if(x=="September" && (y>=23 && y<=30) || x=="October" && (y>=1 && y<=22) ){
        document.getElementById("sign").innerHTML=Libra;
    }
    else if(x=="October" && (y>=23 && y<=31) || x=="November" && (y>=1 && y<=21) ){
        document.getElementById("sign").innerHTML=Scorpio;
    }
    else if(x=="November" && (y>=22 && y<=30) || x=="December" && (y>=1 && y<=21) ){
        document.getElementById("sign").innerHTML=Sagittarius;
    }
    else if(x=="December" && (y>=22 && y<=31) || x=="January" && (y>=1 && y<=19) ){
        document.getElementById("sign").innerHTML=Capricorn;
    }
    else if(x=="January" && (y>=20 && y<=31) || x=="February" && (y>=1 && y<=18) ){
        document.getElementById("sign").innerHTML=Aquarius;
    }
    else if(x=="February" && (y>=19 && y<=28) || x=="March" && (y>=1 && y<=20) ){
        document.getElementById("sign").innerHTML=Pisces;
    }
    else{
        document.getElementById("sign").innerHTML="You have no trait.";
    }

}
