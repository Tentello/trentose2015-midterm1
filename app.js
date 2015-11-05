/* your code should go in this file */

/* 
 * The data is available in the array *data*
 * Each element of the array has the following structure:
 *  {
 *    phrase_en : "I'm a man",        // sentence in english
 *    phrase_de : "Ich bin ein Mann"  // sentence in german
 *  }
 */ 
var tmpl = ' <li class="current">' +
           '  <h3>SENTENCE</h3>' +
           ' </li> ';

var ENGINE = {
    
    correctAnswer : 0,
    
    english : "",
    
    german : "",
    
    selectPhrase : function(){
        var x = Math.floor(Math.random() * (data.length));
        this.english = data[x].phrase_en;
        this.german = data[x].phrase_de;
        data.splice(x, 1);
    },
    
    changePhrase : function(id){
        this.selectPhrase();
        var temp = tmpl.replace("SENTENCE", this.english);
        $(".sentences").append(temp);
    }
};

$(document).ready(function(){
    ENGINE.changePhrase();
    $(".opt-continue").click(function(){
        if(data.length==0){
            $(".practice").hide();
            $(".final").show();
        }
        if($(".form-control").val()==ENGINE.german){
            ENGINE.correctAnswer+=1;
        }
        $(".sentences").empty();
        ENGINE.changePhrase();
    });
});





