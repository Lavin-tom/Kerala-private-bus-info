var options1 = ["Choose District","THIRUVANANTHAPURAM","KOLLAM","PATHANAMTHITTA","ALAPUZHA","KOTTAYAM","IDUKKI","ERNAKULAM","TRISSUR","PALAKKAD","MALAPURAM","KOZHIKODE","WAYANAD","KANNUR","KASARAGOD"];	
var option2 = {};	
var busStations = {	
    "KOTTAYAM": ['116 COLONY ', '14TH MILE ', '504 COLONY ', 'ADICHIPUZHA ', 'ADIVARAM ', 'ADUKKAM ', 'ALUMTHARA ',	
				'AMBALAKAVALA ', 'AMBAYATHODE ', 'AMBEDKAR COLONY ', 'AMBIKA MARKET ', 'ANAKAYAM ', 'ANAKKALLU ',	
				'ANAPPARA ', 'ANCHUKUDIYAR ', 'ANCHUKUDIYAR, BHARANANGANAM ', 'ANGELVALLEY ', 'ANICHUVADU ',	
				'ANJILITHANAM ', 'ANTHIYALAM ', 'ARUNAPURAM ', 'ATHIKKAYAM ', 'ATTIPEEDIKA ', 'ATTUVELIKADAVU ',	
				'AYAMKUDY ', 'AYARKUNNAM ', 'AYMANAM ', 'BELIEVERS CHURCH ', 'BHARANANGANAM ', 'BLOCK ', 'BOLGATTY FERRY ',	
				'BOYCEE ', 'BRAHMAMANGALAM ', 'BUND ROAD ', 'CHAMAKKALA ', 'CHAMAMPATHAL ', 'CHAMPAKARA TEMPLE ',	
				'CHANGANACHERY JETTY ', 'CHANGANASSERY ', 'CHANGANASSERY NEW BUS STAND ', 'CHANGANASSERY OLD BUSTAND ',	
				'CHANGANASSERY, PERUNNA ', 'CHANGANASSERY,(PERUNNA) ', 'CHANJODY ', 'CHANNANIKKAD ', 'CHATHANTHARA ',	
				'CHEEPUNKAL ', 'CHEERANCHIRA ', 'CHEMMANAKARY ', 'CHENAPPADY ', 'CHENGAKKUNNU ', 'CHENGALAM JN ',	
				'CHENGALATHU KAVU ', 'CHENGANNUR ', 'CHENNADU ', 'CHERPUNKAL ', 'CHERTHALA ', 'CHERUPUSHPAM PALLY ',	
				'CHETHIMUKKU ', 'CHETTIMUKKU JN ', 'CHETTUTHODU ', 'CHINGAVANAM ', 'CHIRAKKADAVU ', 'CHITTAR ',	
				'CHOLATHADAM ', 'CHOTTANIKKARA ', 'CHOVOOR ', 'CHUNKAPPARA ', 'COLONY ', 'EDAKADATHY ', 'EDAKKUNNAM ',	
				'EDAMATTOM ', 'EDAMURI ', 'EDAYAZHAM ', 'ELAMKAD TOP ', 'ELAMKADU ', 'ELAMPALLY ', 'ELANJI ',	
				'ELIVALIKKARA ', 'ERATTAYAR JN ', 'ERATTUPETTA ', 'ERATTUPETTA PVT BUS STAND ', 'ERNAKULAM ',	
				'ERNAKULAM KALOOR BUS STAND ', 'ERUMELI ', 'ERUMELY ', 'ESI VADAVATHOOR ', 'ETTUMANOOR ', 'EZHACHERRY ',	
				'EZHUMANTHURUTHU ', 'GURUVAYUR ', 'INCHAKUZHY ', 'IRITTY ', 'IRUMPOONNIKARA ', 'ITTIAPPARA ',	
				'KADAPLAMATTOM ', 'KADAPPOOR ', 'KADATHURUTHY ', 'KADUMOONCHIRA ', 'KADUTHURUTHY ', 'KADUTHURUTHY MARKET ',	
				'KAINADY ', 'KAIPPUZHAMUTTU ', 'KAIPUZHA ', 'KAIPUZHA SASTHANGAL ', 'KAIPUZHAMUTTU ', 'KAKKANAD ', 'KAKKOMBU ',	
				'KALAKOODU ', 'KALATHIPADY ', 'KALAYAKANDAM ', 'KALLAM ', 'KALLAMPARA ', 'KALLARA ', 'KALLINGATHARA ',	
				'KALLUMKATHARA ', 'KALLUNGATHARA CHURCH ', 'KALLUPURACKAL ', 'KANAMALA ', 'KANDAMCHIRA JN ', 'KANDANKAVU ',	
				'KANGAZHA ', 'KANGAZHA HOSPITAL ', 'KANJIRAM JETTY ROAD ', 'KANJIRAMATTOM ', 'KANJIRAPPALLY ',	
				'KANJIRAPPALLY BUS STAND ', 'KANJIRAPPALLY PVT BUS STAND ', 'KAPPADU ', 'KARIMANNOOR ', 'KARIPPOOTHATTU ',	
				'KARIPPUTHATTU ', 'KARIPPUTHATTU BRIDGE ', 'KARIPUTHATTU ', 'KARUKACHAL ', 'KATTAPPANA ',	
				'KATTAPPANA PVT BUS STAND ', 'KAVANALKADAVU ', 'KAVANATTINKARA ', 'KAVUMKANDOM ',	
				'KAYAMKULAM PRIVATE BUS STAND ', 'KAYYUR ', 'KEZHUVANKULAM ', 'KIDANGOOR ',	'KIDANGOOR TEMPLE ', 'KISSUMUM ',	
				'KOCHMATTOM ', 'KOCHUROAD ', 'KODIKUTHY ', 'KODUNGOOR ', 'KOKKAYAR VEMBLY ', 'KOLENCHERY ', 'KOLENCHERY M M HOSPITAL ',	
				'KOLLADU ', 'KOLLADU BOATJETTY JN ', 'KOMBUKUTHY ', 'KONCHUMADA ', 'KOORAMTHOOKKU ', 'KOOROPPADA ', 'KOOTHATTUKULAM ',	
				'KOOTTICKAL ', 'KOOVAPPALLY ', 'KORUTHODU ', 'KOSAMATTOMPADY ', 'KOTTARAMATTOM ', 'KOTTARAMATTOM BUS STAND ', 'KOTTARAMKADA ',	
				'KOTTAYAM ', 'KOTTAYAM BUS STAND ', 'KOZHENCHERRY ', 'KOZHENCHERY ', 'KOZHIKODE ', 'KULATHOORMOOZHY ', 'KUMARAKOM ',	
				'KUMARAKOM BOAT JETTY ', 'KUMARAKOM MARKET JUNCTION ', 'KUMILY JN ', 'KUNINJI ', 'KUNNAMTHANAM ', 'KUNNONNI ', 'KUNNUMPURAM ',	
				'KURAVILANGAD ', 'KURICHY ', 'KURUMBANMOOZHY ', 'KURUMPANMOOZHY ', 'KURUMULLOOR CHURCH ', 'KURUPPANTHARA ', 'KURUPPUMTHARA ',	
				'KUTTISSERIKADAVU ', 'KUZHIMAVU ', 'LAKKATTOOR ', 'MADATHILKAVALA ', 'MALAYALAPPUZHA ', 'MALIKA KADAVU ', 'MALIKAPPADY ',	
				'MALLAPPALLY ', 'MALLAPPALLY BUS STAND ', 'MAMOODU ', 'MANACKACHIRA ', 'MANALELPALLY ', 'MANARCADU CHURCH ', 'MANARCADU JN. ',	
				'MANCOMBU ', 'MANGALAGIR ', 'MANGAPETTA ', 'MANGARAGIRI ', 'MANIMALA ', 'MANIYAPARAMBU ', 'MANJAKUZHY ', 'MANJOOR ',	
				'MANKOMBU TEMPLE ', 'MANNADISALA ', 'MANNAM ', 'MANNAM TEMPLE ', 'MANNANAM ', 'MARAMON JN ', 'MARANGATTUPILLY ',	
				'MARMALA ROAD JN. ', 'MATHAMBA ', 'MATHUNKAL ', 'MATTAKARA ', 'MAVELIKARA ', 'MAVELIKKARA ', 'MCH ', 'MECHAL ',	
				'MED. COLLEGE ', 'MEDICAL COLLEGE BUS STAND ', 'MEDICAL COLLEGE HOSPITAL ', 'MEDICAL COLLGE BUS STAND KOTTAYAM ',	
				'MEENADAM CATTLE MARKET ', 'MELADUKKAM ', 'MELUKAVUMATTAM ', 'MEVIDA ', 'MG UNIVERSITY ', 'MONIPALLY ', 'MOOKKENPETTY ',	
				'MOOLAMATTOM JN ', 'MOOLEDOM ', 'MOOLEPEEDIKA ', 'MOONGAMKUZHY ', 'MOOTHEDATHUKAVU ', 'MOSCOW ', 'MOSCOW JN ', 'MOTHIRAVAYAL ',	
				'MUKKADA JN ', 'MUKKOOR ', 'MUKKOOTTUTHARA ', 'MULAYAMVELI ', 'MUNDAKAYAM ', 'MUNDAKAYAM PVT BUS STNAD ', 'MUNDIAPPALLY ',	
				'MUNDIYAKAL ', 'MUNICIPAL BUS STAND, PALA ', 'MUTTOM BUS STAND ', 'MUTTOM JN ', 'MUVATTUPUZHA ', 'NALAKAVALA ', 'NARAKATHODE ',	
				'NARANAMTHODU ', 'NATTAKOM GUEST HOUSE ', 'NEDUMKUNNAM ', 'NEELOOR ', 'NEENDOOR ', 'NEERIKKAD ', 'NEEZHOOR ', 'NEREKADAV ',	
				'NEREKADAVU FERRY ', 'NJALIYAKUZH ', 'NJALIYAKUZHY ', 'NJANDUKALLU ', 'NJEEZHOOR ', 'ONAMTHUURTHU ', 'PACHIMA ', 'PADUVA ',	
				'PAIKA ', 'PAIPPAD ', 'PAKKANAM ', 'PAKKIL ', 'PAKKILKAVALA ', 'PALA ', 'PALA KOTTARAMATTOM STAND ', 'PALA MUN STAND ',	
				'PALA OLD BUS STAND ', 'PALA PRIVATE BUS STAND ', 'PALA TOWN STAND ', 'PALAAKKAD CHURCH ', 'PALACHUVADU ', 'PALACKATHADOM ',	
				'PALAMATTAM ', 'PALAMKADAVU ', 'PALAPRA TEMPLE ', 'PALLICKATHODU ', 'PALLIKADAVU ', 'PAMPADY ', 'PAMPADY DAYARA ', 'PAMPAVALLY ',	
				'PANACHIKAADU ', 'PANAMATTOM ', 'PANAMBUKADU ', 'PARAMATTOM ', 'PARATHANAM ', 'PARIPPU ', 'PARUTHUMPARA JN ', 'PATHAMPUZHA ',	
				'PATHANADU ', 'PATHANAMTHITTA ', 'PATHINANCHIL CHIRA ', 'PATHINANCHIL KADAVU ', 'PATHINARIL CHIRA ', 'PATHINARILCHIRA ', 'PAYIPPADU JN ',	
				'PAYYAPPADY ', 'PERINGULAM ', 'PERUMPUZHAKADAVU ', 'PERUMTHURUTHU ', 'PERUNNA ', 'PERUNNAD ', 'PERUNNADU ', 'PERUVA ',	
				'PIRAVOM ', 'PLASANAL ', 'PODIMATTOM ', 'PONGAMTHANAM ', 'PONKUNNAM ', 'PONKUNNAM BUS STAND ', 'PONTHENPUZHA ', 'POONJAR ',	
				'POOTHOTTA ', 'POOVANTHURUTHU ', 'POOVASSERY ', 'POOVATHILAPPU ', 'POTTUKULAM ', 'PRAVATTOM ', 'PRAVITHANAM ', 'PULIKKUNNU ',	
				'PULIKUTTISSERY ', 'PULIKUZHY COLONY ', 'PULLARIKUNNU ', 'PUNALUR JN ', 'PUNCHAVAYAL ', 'PUNNAKKAL NIRAVU ', 'PUNNAKKUZHI ',	
				'PUNNATHURA ', 'PUNNAVELI ', 'PUNNILAM BUS STOP ', 'PUTHENPALAM ', 'PUTHENPALLY ', 'PUTHUPALLY ', 'PUTHUPPALLY ', 'RAMAPURAM ',	
				'RANNI ', 'RANNI ,ITTIYAPPARA ', 'S N PURAM ', 'SANTHIPURAM ', 'SASTHANADA ', 'SIVAJINAGAR ', "ST. XAVIER'S COLLEGE, KOTHAVARA, ",	
				'SVR NSS COLLEGE ', 'T V PURAM ', 'TEEKOY ', 'THACHAPUZHA ', 'THALASSERRY ', 'THALASSERY ', 'THALAYOLAPARAMBU ', 'THAMARAKADU JN ',	
				'THAMPALAKAD ', 'THEKKEMAAL ', 'THEKKEMALA ', 'THEMPRAVAL KADAVU ', 'THENGANA ', 'THEVALAKADU ', 'THEVARUPARA ', 'THIDANADU ', 'THIRUVALLA ',	
				'THIRUVANCHOOR ', 'THIRUVARPPU ', 'THIRUVARPPU TEMPLE ', 'THODUPUZHA ', 'THOTTABHAGOM ', 'THOTTACKAD HOSPITAL ', 'THOTTACKADU ', 'THULAPPALLY ',	
				'THUMARAMPARA ', 'TOLL ', 'ULLALA ', 'UMIKUPPA ', 'UMMIKUPPA ', 'UNIVERSITY ', 'UZHAVOOR ', 'VADAKKEMALA ', 'VADASSERIKARA ', 'VADAVATHOOR ',	
				'VADAVATHOOR EAST ', 'VADAVATHOOR ESI ', 'VADAVATHOOR KADAVU ', 'VAIKKOM ', 'VAIKOM ', 'VAIPPUR ', 'VAKKAD ', 'VALLIYAMKAVU ', 'VATTAKKAVU ',	
				'VATTUPURA ', 'VAYALA ', 'VAZHAMANA ', 'VECHOOCHIRA ', 'VECHOOR ', 'VELLANY ', 'VELLAVOOR ', 'VELLOOPARAMBU ', 'VELLOOR ', 'VELLOOR H P C ',	
				'VELLUTHURUTHI TEMPLE ', 'VELOOR ', 'VENGOTTA ', 'VENKOTTA ', 'VETTIMUKAL ', 'VYTTILA HUB ', 'VYTTILA JN. '],	
    "KOLLAM": ["StationX", "StationY", "StationZ"],	
};	
	function loadOptions(selectId, options) {	
    var select = document.getElementById(selectId);	
    select.innerHTML = '';	

    options.forEach(function (option) {	
        var optionElement = document.createElement("option");	
        optionElement.value = option;	
        optionElement.text = option;	
        select.add(optionElement);	
    });	
	}	
	loadOptions("dropdown1", options1);	

	document.getElementById("filterButton").addEventListener("click", function () {	
		var selectedValue = document.getElementById("dropdown1").value;	
		loadDropdown2(selectedValue);	
	});	
	function loadDropdown2(selectedValue) {	
		var options2Array = busStations[selectedValue] || []; 	
		loadOptions("dropdown2", options2Array);	
		loadOptions("dropdown3",options2Array);	
	}	
		async function fetchJsonData(file) {	
			try {	
				const response = await fetch(file);	
				const jsonData = await response.json();	
				return jsonData;	
			} catch (error) {	
				console.error('Error fetching JSON data:', error);	
				throw error;	
			}	
    }

async function search() {
    try {
        const dropdown1Value = document.getElementById("dropdown1").value;
        const dropdown2Value = document.getElementById("dropdown2").value;
        const dropdown3Value = document.getElementById("dropdown3").value;

        console.log("Searching with values:", dropdown1Value, dropdown2Value, dropdown3Value);

        const jsonFilePath = 'res/' + dropdown1Value.toLowerCase() + '.json';
        const response = await fetch(jsonFilePath);
        console.log('Response status:', response.status);

        const jsonData = await response.json();
        console.log('Fetched JSON data:', jsonData);

        const table = document.getElementById('resultTable');
        const tableBody = table.getElementsByTagName('tbody')[0];
        const tableHead = table.getElementsByTagName('thead')[0];

        tableHead.style.display = 'none';
        tableBody.innerHTML = '';

        if (jsonData && jsonData.busSchedules && jsonData.busSchedules.length > 0) {
            jsonData.busSchedules.forEach(schedule => {
                const routeIndex2 = schedule.route.indexOf(dropdown2Value);
                const destinationIndex2 = schedule.route.indexOf(dropdown3Value);

                if (routeIndex2 >= 0 && destinationIndex2 >= 0 && routeIndex2 < destinationIndex2) {
                    const selectedTrips = schedule.schedule.filter(trip => {
                        const startIndex = schedule.route.indexOf(dropdown2Value);
                        const endIndex = schedule.route.indexOf(dropdown3Value);
                        const stations = trip.stations;

                        return (
                            startIndex !== -1 &&
                            endIndex !== -1 &&
                            endIndex > startIndex &&
                            stations &&
                            stations[startIndex] &&
                            stations[startIndex].station === dropdown2Value &&
                            stations[endIndex] &&
                            stations[endIndex].station === dropdown3Value
                        );
                    });

                    if (selectedTrips.length > 0) {

                        tableHead.style.display = '';

                        selectedTrips.forEach(trip => {
                            const stations = trip.stations;
                            const row = tableBody.insertRow();
                            const cell1 = row.insertCell(0);
                            const cell2 = row.insertCell(1);
                            const cell3 = row.insertCell(2);
                            const cell4 = row.insertCell(3);

                            cell1.textContent = schedule["Vehicle Number"];
                            cell2.textContent = stations[0].station.trim();
                            cell3.textContent = stations[stations.length - 1].station.trim();
                            cell4.textContent = stations[0].departureTime;
                        });
                    }
                }
            });
        } else {
            console.error('Invalid data structure. Expected "busSchedules" property to exist.');
            document.getElementById('noRouteMessage').textContent = 'Invalid data structure. Please try again.';
        }
    } catch (error) {
        console.error('Error fetching or parsing JSON data:', error);
        document.getElementById('noRouteMessage').textContent = 'Error fetching or parsing data. Please try again.';
    }
}

