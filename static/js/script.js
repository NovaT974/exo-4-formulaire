$(document).ready(function() {        
    $('#btn').click(function () {
        var nb1 = $("#nb1").val();
        var nb2 = $("#nb2").val();
        var color = $("#couleur").val();
        // $.post('http://localhost:3002/addition', {
        //     nb1: nb1, 
        //     nb2: nb2
        // },  function(data){
        //     console.log(data);
        //     $("#resultat").append(data);
        //     }
        // )

        $.ajax({
            type: 'POST',
            data: {
                nb1: nb1,
                nb2: nb2,
                color: color
            },
            url: "http://localhost:8800/addition",
            success: function (resultat, color) {
                //$('#resultat').append('' + resultat + ' ' + req.body.color + ' ' );
                $('#resultat').append(resultat );
                $('#choix_couleur').append(color);
            },
            error: function (e) {
                console.log("erreur :", e);
            }
        });
    });  
});   
        /***** ******** */
        //console.log("click");
        // $.ajax({
        //     type: 'POST',
        //     url: 'http://localhost:3105/addition',
        //     data :'nb1=' + nb1 + '&nb2=' +nb2 ,
        //     success: function (calcul) {
        //         console.log(calcul);
        //         var result = "";

        //         // for (var i = 0; i < calcul.length; i++) {
        //         //     result = calcul.total;
        //         //     console.log(result);
        //         //     return nb1 + nb2;
        //         // }
        //         $("#resultat").append('' + calcul.total + '');
        //     },
        //     error: function (resultat, statut, erreur) {

        //         //alert('ERROR 404');
        //         console.log("error requête Ajax");
        //         //console.log(resultat);
        //     }
        // });
        



