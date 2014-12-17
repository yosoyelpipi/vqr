
function onBodyLoad(){
	document.addEventListener("deviceready", onDeviceReady, false);
}

function onDeviceReady(){
	$("#resultado").html('<span class="glyphicon glyphicon-registration-mark" aria-hidden="true"></span>');

	//navigator.accelerometer.getCurrentAcceleration(onInfo, onError);
    
	//inicializa la verificación de la conexión
	checkConnection();
    
	//Habilita la función del botón atrás.
	document.addEventListener("backbutton", onBackKeyDown, false);
	
	//Habilita la función del botón menú.
	document.addEventListener("menubutton", onMenuKeyDown, false);

}

// Función activada. Botón Menú.
function onMenuKeyDown() {
	alert('No hay opciones de menu disponible por el momento.');
    }

function onBackKeyDown() {
            if( confirm("Realmente desea salir de la aplicación? Para navegar por esta app utilice los enlaces internos.") )
            {
                  navigator.app.exitApp();
            }
       } 

function checkConnection() {
            var networkState = navigator.connection.type;

            var states = {};
            states[Connection.UNKNOWN]  = 'Unknown connection';
            states[Connection.ETHERNET] = 'Ethernet connection';
            states[Connection.WIFI]     = 'WiFi connection';
            states[Connection.CELL_2G]  = 'Cell 2G connection';
            states[Connection.CELL_3G]  = 'Cell 3G connection';
            states[Connection.CELL_4G]  = 'Cell 4G connection';
            states[Connection.CELL]     = 'Cell generic connection';
            states[Connection.NONE]     = 'No network connection';

            alert('Estas conectado mediante: ' + states[networkState]);
        }