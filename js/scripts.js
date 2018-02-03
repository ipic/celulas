$(document).ready(function() {
    var curitiba = [-25.424429, -49.265382];
    var icon = L.icon({
        iconUrl: 'img/marker.png',
        iconSize: [49,60],
        iconAnchor: [33, 59],
        popupAnchor: [-3, -60],
    })
    var map = L.map('map', {zoomControl: false}).setView(curitiba, 13);
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
        attribution: '',
        maxZoom: 13,
        id: 'mapbox.streets',
        accessToken: 'pk.eyJ1IjoiZWxsaXNvbmxlYW8iLCJhIjoiY2o2bDkwY2p3MHF0ajJ2cW9yc2hidzEwNiJ9.fkdwlQeT-Wbq2_sYU78l1g'
    }).addTo(map);

    var cells = {
        anaCicilia: {name: 'Anacicilia', day: 'Quarta-Feira', hour: '15:00'},
        antonioMadeira: {name: 'Pastor Antônio Madeira', day: 'Terça-Feira', hour: '20:00'},
        clayton: {name: 'Clayton', day: 'Terça-Feira', hour: '20:00'},
        cleverson: {name: 'Cleverson', day: 'Sexta-Feira', hour: '20:00'},
        debora: {name: 'Débora', day: 'Terça-Feira', hour: '20:00'},
        elce: {name: 'Elce', day: 'Terça-Feira', hour: '20:00'},
        gesualda: {name: 'Gesualda', day: 'Terça-Feira', hour: '20:00'},
        jesiel: {name: 'Jesiel', day: 'Quinta-Feira', hour: '20:00'},
        lais: {name: 'Laís', day: 'Sexta-Feira', hour: '20:00'},
        leonice: {name: 'Leonice', day: 'Terça-Feira', hour: '20:30'},
        mariaCristina: {name: 'Maria Cristina', day: 'Sexta-Feira', hour: '20:00'},
        onesimo: {name: 'Onésimo', day: 'Terça-Feira', hour: '20:30'},
        thelma: {name: 'Thelma', day: 'Quinta-Feira', hour: '20:00'},
        willian: {name: 'Willian', day: 'Terça-Feira', hour: '20:00'},
    }

    var districts = [
        {
            pos: [-25.370868, -49.270705],
            name: 'Abranches',
            cells: [cells.cleverson],
        },
        {
            pos: [-25.453071, -49.277923],
            name: 'Água Verde',
            cells: [cells.antonioMadeira],
        },
        {
            pos: [-25.403990, -49.260186],
            name: 'Ahú',
            cells: [cells.leonice],
        },
        {
            pos: [-25.427021, -49.250203],
            name: 'Alto da XV',
            cells: [cells.thelma]
        },
        {
            pos: [-25.397200, -49.236718],
            name: 'Bacacheri',
            cells: [cells.onesimo, cells.leonice]
        },
        {
            pos: [-25.580861, -49.629558],
            name: 'Balsa Nova',
            cells: [cells.cleverson]
        },
        {
            pos: [-25.444418, -49.288106],
            name: 'Batel',
            cells: [cells.thelma],
        },
        {
            pos: [-25.433261, -49.297157],
            name: 'Bigorrilho',
            cells: [cells.onesimo, cells.jesiel],
        },
        {
            pos: [-25.388682, -49.233469],
            name: 'Boa Vista',
            cells: [cells.cleverson, cells.leonice, cells.gesualda, cells.elce],
        },
        {
            pos: [-25.410444, -49.275414],
            name: 'Bom Retiro',
            cells: [cells.cleverson],
        },
        {
            pos: [-25.503107, -49.236857],
            name: 'Boqueirão',
            cells: [cells.antonioMadeira],
        },
        {
            pos: [-25.389416, -49.355035],
            name: 'Butiatuvinha',
            cells: [cells.mariaCristina],
        },
        {
            pos: [-25.406124, -49.252034],
            name: 'Cabral',
            cells: [cells.jesiel, cells.leonice],
        },
        {
            pos: [-25.462060, -49.205588],
            name: 'Cajuru',
            cells: [cells.debora],
        },
        {
            pos: [-25.466876, -49.327463],
            name: 'Campo Comprido',
            cells: [cells.lais, cells.mariaCristina, cells.clayton],
        },
        {
            pos: [-25.459671, -49.527294],
            name: 'Campo Largo',
            cells: [cells.cleverson],
        },
        {
            pos: [-25.437300, -49.211194],
            name: 'Capão da Imbuia',
            cells: [cells.cleverson, cells.leonice],
        },
        {
            pos: [-25.504267, -49.296065],
            name: 'Capão Raso',
            cells: [cells.antonioMadeira],
        },
        {
            pos: [-25.433261, -49.297157],
            name: 'Champagnat',
            cells: [cells.jesiel]
        },
        {
            pos: [-25.424429, -49.265382],
            name: 'Centro',
            cells: [cells.onesimo, cells.anaCicilia, cells.lais]
        },
        {
            pos: [-25.417489, -49.268707],
            name: 'Centro Cívico',
            cells: [cells.onesimo, cells.gesualda],
        },
        {
            pos: [-25.292978, -49.226634],
            name: 'Colombo',
            cells: [cells.cleverson],
        },
        {
            pos: [-25.433166 , -49.242973],
            name: 'Cristo Rei',
            cells: [cells.antonioMadeira, cells.debora]
        },
        {
            pos: [-25.456324, -49.231621],
            name: 'Jardim das Américas',
            cells: [cells.willian]
        },
        {
            pos: [-25.419069, -49.234203],
            name: 'Jardim Social',
            cells: [cells.onesimo],
        },
        {
            pos: [-25.412874 , -49.258339],
            name: 'Juvevê',
            cells: [cells.antonioMadeira, cells.cleverson]
        },
        {
            pos: [-25.489025, -49.294125],
            name: 'Novo Mundo',
            cells: [cells.antonioMadeira],
        },
        {
            pos: [-25.426048, -49.366964],
            name: 'Orleans',
            cells: [cells.mariaCristina]
        },
        {
            pos: [-25.392658, -49.282962],
            name: 'Pilarzinho',
            cells: [cells.lais],
        },
        {
            pos: [-25.474922, -49.300784],
            name: 'Portão',
            cells: [cells.antonioMadeira]
        },
        {
            pos: [-25.370598, -49.234298],
            name: 'Santa Cândida',
            cells: [cells.lais]
        },
        {
            pos: [-25.404007, -49.328694],
            name: 'Santa Felicidade',
            cells: [cells.debora, cells.mariaCristina],
        },
        {
            pos: [-25.418977, -49.348347],
            name: 'São Braz',
            cells: [cells.mariaCristina, cells.lais],
        },
        {
            pos: [-25.531835, -49.203572],
            name: 'São José dos Pinhais',
            cells: [cells.clayton]
        },
        {
            pos: [-25.428522, -49.228371],
            name: 'Tarumã',
            cells: [cells.leonice]
        },
        {
            pos: [-25.457769, -49.294653],
            name: 'Vila Isabel',
            cells: [cells.antonioMadeira, cells.thelma],
        },
        {
            pos: [-25.409061, -49.291462],
            name: 'Vista Alegre',
            cells: [cells.onesimo]
        },
    ];

    var html = '';
    var markers = [];
    districts.forEach(function(d, i) {
        var cellText = '<h4>'+d.name+'</h4><table class="mdl-data-table mdl-js-data-table"><thead><tr class="mdl-data-table__cell--non-numeric"><th>Nome do Responsável</th><th>Dia</th><th>Hora</th></tr></thead><tbody>';
        d.cells.forEach(function(cell) {
            cellText += '<tr><td class="mdl-data-table__cell--non-numeric">'+cell.name+'</td><td class="mdl-data-table__cell--non-numeric">'+cell.day+'</td><td class="mdl-data-table__cell--non-numeric">'+cell.hour+'</td></tr>';
        })
        cellText += '</tbody></table>';

        var marker = L.marker(d.pos, {
            id: 'marker-'+ i,
            icon: icon,
            riseOnHover: true,
        }).addTo(map).bindPopup(cellText).on('click', clickZoom);
        // populate districts menu
        html += '<a id="marker-'+i+'"class="mdl-navigation__link">'+ d.name +'</a>'
        markers.push(marker);
    });

    function clickZoom(e) {
        map.setView(e.target.getLatLng(), 14);
    }

    function markerFunction(id) {
        markers.forEach(function(marker) {
            var markerId = marker.options.id;
            if (markerId === id){
                $(".mdl-layout__drawer-button").click();
                map.setView(marker.getLatLng(), 14);
                marker.openPopup();
            };
        });
    }
    $(document).on('click', 'a', function(e) {
        markerFunction($(e.target)[0].id)
    })

    $('#bairros').html(html);

    // about
    $('.show-dialog').on('click', function() {
        var dialogName = $(this).data('dialog')
        var dialog = $('#'+dialogName)[0];
        if (!dialog.showModal) {
            dialogPolyfill.registerDialog(dialog);
        }
        dialog.showModal();
    });
    $('.close').on('click', function() {
        var dialog = $(this).parent().parent('dialog')[0];
        $('form').find(':input').val('');
        dialogPolyfill.registerDialog(dialog);
        dialog.close();
    });

    $('.send-form').click(function(e) {
        e.preventDefault();
        $(this).prop('disabled', true)
        e.preventDefault();
        var url = 'https://formspree.io/cafeipic@gmail.com',
            formData = $('form').serializeArray(),
            data = {};

        formData.forEach(function(item) {
            if (!item.name.startsWith('_')) {
                data[item.name] = item.value;
            }
        });

        $.ajax({
            method: 'POST',
            url: url,
            data: data,
            dataType: 'json',
            success: function() {
                alert('Obrigado! Entraremos em contato o mais breve possível.');
                $('.send-form').prop('disabled', false);
                $('form').find(':input').val('');
                var dialog = $('form').parent().parent('dialog')[0];
                dialogPolyfill.registerDialog(dialog);
                dialog.close();
            },
            error: function(e) {
                console.log(e);
            }
        });

    });

});
