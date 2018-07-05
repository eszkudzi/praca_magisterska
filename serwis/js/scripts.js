 var mousePositionControl = new ol.control.MousePosition({
        coordinateFormat: ol.coordinate.createStringXY(6),
        projection: 'EPSG:4326',
        className: 'custom-mouse-position',
        target: document.getElementById('mouse-position'),
        undefinedHTML: '&nbsp;'
      });

var scaleLineControl = new ol.control.ScaleLine();

var licznikLinia;
var licznikPoligon;

//do pomiarow  LINIA

var source = new ol.source.Vector();

      var vector = new ol.layer.Vector({
        source: source,
        style: new ol.style.Style({
            stroke: new ol.style.Stroke({
            color: 'darkred',
            width: 2
          }),
          image: new ol.style.Circle({
            radius: 7,
            fill: new ol.style.Fill({
              color: '#ffcc33'
            })
          })
        })
      });
     
      var helpTooltipElement;

      var helpTooltip;

      var measureTooltipElement;

      var measureTooltip;
 
      var pointerMoveHandler = function(evt) {
        if (evt.dragging) {
          return;
        }

        helpTooltipElement.innerHTML = helpMsg;
        helpTooltip.setPosition(evt.coordinate);

        $(helpTooltipElement).removeClass('hidden');
      };
	  
	  
//do pomiarow  POLIGON

var sourcePolygon = new ol.source.Vector();

      var vectorPolygon = new ol.layer.Vector({
        source: sourcePolygon,
        style: new ol.style.Style({
            stroke: new ol.style.Stroke({
            color: 'darkred',
            width: 2
          }),
          image: new ol.style.Circle({
            radius: 7,
            fill: new ol.style.Fill({
              color: '#ffcc33'
            })
          })
        })
      });

      var helpTooltipElementPolygon;

      var helpTooltipPolygon;

      var measureTooltipElementPolygon;

      var measureTooltipPolygon;
 
      var pointerMoveHandlerPolygon = function(evt) {
        if (evt.dragging) {
          return;
        }

        helpTooltipElementPolygon.innerHTML = helpMsg;
        helpTooltipPolygon.setPosition(evt.coordinate);

        $(helpTooltipElementPolygon).removeClass('hidden');
      };


var lublin=ol.proj.transformExtent([21.915037, 51.595859, 23.771727, 50.767751], 'EPSG:4326', 'EPSG:3857');
var lublinCenter = ol.proj.fromLonLat([22.571050, 51.250559]);

      var view = new ol.View({
          center: lublinCenter,
          zoom: 14
        })

		
	function elastic(t) {
        return Math.pow(2, -10 * t) * Math.sin((t - 0.075) * (2 * Math.PI) / 0.3) + 1;
      }

//var mapMinZoom = 11;
//var mapMaxZoom = 14;

var layer26308KARTLublin = new ol.layer.Tile({
  //extent: lublin,
  source: new ol.source.XYZ({
    attributions: [new ol.Attribution({html: '26308KARTLublin'})],
    url: "mapy/26308KARTLublin//{z}/{x}/{y}.png",
    tilePixelRatio: 1.000000
    //minZoom: mapMinZoom,
    //maxZoom: mapMaxZoom
  })
});

//warstwy

var layerPlanMLublina1918 = new ol.layer.Tile({
  extent: lublin,
  source: new ol.source.XYZ({
    attributions: [new ol.Attribution({html: 'PlanMLublina1918'})],
    url: "mapy/PlanMLublina1918//{z}/{x}/{y}.png",
    tilePixelRatio: 1.000000
  })
});


var layerPlanLublina1930 = new ol.layer.Tile({
  extent: lublin,
  source: new ol.source.XYZ({
    attributions: [new ol.Attribution({html: 'PlanLublina1930'})],
    url: "mapy/PlanLublina1930//{z}/{x}/{y}.png",
    tilePixelRatio: 1.000000
  })
});


var layerPlanLublina1931 = new ol.layer.Tile({
  extent: lublin,
  source: new ol.source.XYZ({
    attributions: [new ol.Attribution({html: 'PlanLublina1931'})],
    url: "mapy/PlanLublina1931//{z}/{x}/{y}.png",
    tilePixelRatio: 1.000000
  })
});


var layerLublin15K1932 = new ol.layer.Tile({
  extent: lublin,
  source: new ol.source.XYZ({
    attributions: [new ol.Attribution({html: 'Lublin15K1932'})],
    url: "mapy/Lublin15K1932//{z}/{x}/{y}.png",
    tilePixelRatio: 1.000000
  })
});


var layerPlanWielkiegoMiastaLublina1935 = new ol.layer.Tile({
  extent: lublin,
  source: new ol.source.XYZ({
    attributions: [new ol.Attribution({html: 'PlanWielkiegoMiastaLublina1935'})],
    url: "mapy/PlanWielkiegoMiastaLublina1935//{z}/{x}/{y}.png",
    tilePixelRatio: 1.000000
  })
});


var layerVerkehrsplan15K1939 = new ol.layer.Tile({
  extent: lublin,
  source: new ol.source.XYZ({
    attributions: [new ol.Attribution({html: 'Verkehrsplan15K1939'})],
    url: "mapy/Verkehrsplan15K1939//{z}/{x}/{y}.png",
    tilePixelRatio: 1.000000
  })
});


var layerLublin15K1943 = new ol.layer.Tile({
  extent: lublin,
  source: new ol.source.XYZ({
    attributions: [new ol.Attribution({html: 'Lublin15K1943'})],
    url: "mapy/Lublin15K1943//{z}/{x}/{y}.png",
    tilePixelRatio: 1.000000
  })
});


var layerGSGS4435LUBLIN25K1943 = new ol.layer.Tile({
  extent: lublin,
  source: new ol.source.XYZ({
    attributions: [new ol.Attribution({html: 'GSGS4435LUBLIN25K1943'})],
    url: "mapy/GSGS4435LUBLIN25K1943//{z}/{x}/{y}.png",
    tilePixelRatio: 1.000000
  })
});


var layerM3434ALYUBLIN1941 = new ol.layer.Tile({
  extent: lublin,
  source: new ol.source.XYZ({
    attributions: [new ol.Attribution({html: 'M3434ALYUBLIN1941'})],
    url: "mapy/M3434ALYUBLIN1941//{z}/{x}/{y}.png",
    tilePixelRatio: 1.000000
  })
});

var layerPlanGorodaLublina = new ol.layer.Tile({
  extent: lublin,
  source: new ol.source.XYZ({
    attributions: [new ol.Attribution({html: 'PlanGorodaLublina'})],
    url: "mapy/PlanGorodaLublina//{z}/{x}/{y}.png",
    tilePixelRatio: 1.000000
  })
});


var layerLublinNawierzchnia1939 = new ol.layer.Tile({
  extent: lublin,
  source: new ol.source.XYZ({
    attributions: [new ol.Attribution({html: 'LublinNawierzchnia1939'})],
    url: "mapy/LublinNawierzchnia1939//{z}/{x}/{y}.png",
    tilePixelRatio: 1.000000
  })
});


var layer26312KARTLublin = new ol.layer.Tile({
  extent: lublin,
  source: new ol.source.XYZ({
    attributions: [new ol.Attribution({html: '26312KARTLublin'})],
    url: "mapy/26312KARTLublin//{z}/{x}/{y}.png",
    tilePixelRatio: 1.000000
  })
});


var layer26309KARTLublin = new ol.layer.Tile({
  extent: lublin,
  source: new ol.source.XYZ({
    attributions: [new ol.Attribution({html: '26309KARTLublin'})],
    url: "mapy/26309KARTLublin//{z}/{x}/{y}.png",
    tilePixelRatio: 1.000000
  })
});


var layer26319KARTLublin = new ol.layer.Tile({
  extent: lublin,
  source: new ol.source.XYZ({
    attributions: [new ol.Attribution({html: '26319KARTLublin'})],
    url: "mapy/26319KARTLublin//{z}/{x}/{y}.png",
    tilePixelRatio: 1.000000
  })
});


var layer26315KARTLublin= new ol.layer.Tile({
  extent: lublin,
  source: new ol.source.XYZ({
    attributions: [new ol.Attribution({html: '26315KARTLublin'})],
    url: "mapy/26315KARTLublin//{z}/{x}/{y}.png",
    tilePixelRatio: 1.000000
  })
});


var layerFauxbourgs = new ol.layer.Tile({
  extent: lublin,
  source: new ol.source.XYZ({
    attributions: [new ol.Attribution({html: 'Fauxbourgs'})],
    url: "mapy/Fauxbourgs//{z}/{x}/{y}.png",
    tilePixelRatio: 1.000000
  })
});


var layer26310KARTLjublin = new ol.layer.Tile({
  extent: lublin,
  source: new ol.source.XYZ({
    attributions: [new ol.Attribution({html: '26310KARTLjublin'})],
    url: "mapy/26310KARTLjublin//{z}/{x}/{y}.png",
    tilePixelRatio: 1.000000
  })
});


var layerWa51_1912_WGS = new ol.layer.Tile({
  extent: lublin,
  source: new ol.source.XYZ({
    attributions: [new ol.Attribution({html: 'Wa51_1912_WGS'})],
    url: "mapy/Wa51_1912_WGS//{z}/{x}/{y}.png",
    tilePixelRatio: 1.000000
  })
});


var layerWa51_1919_WGS = new ol.layer.Tile({
  extent: lublin,
  source: new ol.source.XYZ({
    attributions: [new ol.Attribution({html: 'Wa51_1919_WGS'})],
    url: "mapy/Wa51_1919_WGS//{z}/{x}/{y}.png",
    tilePixelRatio: 1.000000
  })
});


var layerWa51_1935_WGS = new ol.layer.Tile({
  extent: lublin,
  source: new ol.source.XYZ({
    attributions: [new ol.Attribution({html: 'Wa51_1935_WGS'})],
    url: "mapy/Wa51_1935_WGS//{z}/{x}/{y}.png",
    tilePixelRatio: 1.000000
  })
});


var layerPL3522PmL210 = new ol.layer.Tile({
  extent: lublin,
  source: new ol.source.XYZ({
    attributions: [new ol.Attribution({html: 'PL3522PmL210'})],
    url: "mapy/PL3522PmL210//{z}/{x}/{y}.png",
    tilePixelRatio: 1.000000
  })
});


var layerPL3522PmL610 = new ol.layer.Tile({
  extent: lublin,
  source: new ol.source.XYZ({
    attributions: [new ol.Attribution({html: 'PL3522PmL610'})],
    url: "mapy/PL3522PmL610//{z}/{x}/{y}.png",
    tilePixelRatio: 1.000000
  })
});


var layerPL3522PmL31810 = new ol.layer.Tile({
  extent: lublin,
  source: new ol.source.XYZ({
    attributions: [new ol.Attribution({html: 'PL3522PmL31810'})],
    url: "mapy/PL3522PmL31810//{z}/{x}/{y}.png",
    tilePixelRatio: 1.000000
  })
});


var layerPL3522PmL3101 = new ol.layer.Tile({
  extent: lublin,
  source: new ol.source.XYZ({
    attributions: [new ol.Attribution({html: 'PL3522PmL3101'})],
    url: "mapy/PL3522PmL3101//{z}/{x}/{y}.png",
    tilePixelRatio: 1.000000
  })
});


var layerPL3522PmL31710 = new ol.layer.Tile({
  extent: lublin,
  source: new ol.source.XYZ({
    attributions: [new ol.Attribution({html: 'PL3522PmL31710'})],
    url: "mapy/PL3522PmL31710//{z}/{x}/{y}.png",
    tilePixelRatio: 1.000000
  })
});


var layerPL3522PmL510 = new ol.layer.Tile({
  extent: lublin,
  source: new ol.source.XYZ({
    attributions: [new ol.Attribution({html: 'PL3522PmL510'})],
    url: "mapy/PL3522PmL510//{z}/{x}/{y}.png",
    tilePixelRatio: 1.000000
  })
});


var layerPL3522PmL810 = new ol.layer.Tile({
  extent: lublin,
  source: new ol.source.XYZ({
    attributions: [new ol.Attribution({html: 'PL3522PmL810'})],
    url: "mapy/PL3522PmL810//{z}/{x}/{y}.png",
    tilePixelRatio: 1.000000
  })
});


var layerPL3522PmL32310 = new ol.layer.Tile({
  extent: lublin,
  source: new ol.source.XYZ({
    attributions: [new ol.Attribution({html: 'PL3522PmL32310'})],
    url: "mapy/PL3522PmL32310//{z}/{x}/{y}.png",
    tilePixelRatio: 1.000000
  })
});


var layerPL3522PmL30910 = new ol.layer.Tile({
  extent: lublin,
  source: new ol.source.XYZ({
    attributions: [new ol.Attribution({html: 'PL3522PmL30910'})],
    url: "mapy/PL3522PmL30910//{z}/{x}/{y}.png",
    tilePixelRatio: 1.000000
  })
});


var layerPL3522PmL1210 = new ol.layer.Tile({
  extent: lublin,
  source: new ol.source.XYZ({
    attributions: [new ol.Attribution({html: 'PL3522PmL1210'})],
    url: "mapy/PL3522PmL1210//{z}/{x}/{y}.png",
    tilePixelRatio: 1.000000
  })
});


var layerPL3522PmL1410 = new ol.layer.Tile({
  extent: lublin,
  source: new ol.source.XYZ({
    attributions: [new ol.Attribution({html: 'PL3522PmL1410'})],
    url: "mapy/PL3522PmL1410//{z}/{x}/{y}.png",
    tilePixelRatio: 1.000000
  })
});


var layerPL3522PmL15101024x1285 = new ol.layer.Tile({
  extent: lublin,
  source: new ol.source.XYZ({
    attributions: [new ol.Attribution({html: 'PL3522PmL15101024x1285'})],
    url: "mapy/PL3522PmL15101024x1285//{z}/{x}/{y}.png",
    tilePixelRatio: 1.000000
  })
});


var layerPL3522PmL2010 = new ol.layer.Tile({
  extent: lublin,
  source: new ol.source.XYZ({
    attributions: [new ol.Attribution({html: 'PL3522PmL2010'})],
    url: "mapy/PL3522PmL2010//{z}/{x}/{y}.png",
    tilePixelRatio: 1.000000
  })
});


var layerPL3522PmL1810 = new ol.layer.Tile({
  extent: lublin,
  source: new ol.source.XYZ({
    attributions: [new ol.Attribution({html: 'PL3522PmL1810'})],
    url: "mapy/PL3522PmL1810//{z}/{x}/{y}.png",
    tilePixelRatio: 1.000000
  })
});


var layerPL3522PmL2410 = new ol.layer.Tile({
  extent: lublin,
  source: new ol.source.XYZ({
    attributions: [new ol.Attribution({html: 'PL3522PmL2410'})],
    url: "mapy/PL3522PmL2410//{z}/{x}/{y}.png",
    tilePixelRatio: 1.000000
  })
});


var layerPL3522PmL110 = new ol.layer.Tile({
  extent: lublin,
  source: new ol.source.XYZ({
    attributions: [new ol.Attribution({html: 'PL3522PmL110'})],
    url: "mapy/PL3522PmL110//{z}/{x}/{y}.png",
    tilePixelRatio: 1.000000
  })
});


var layerfuhrerdurchlublinWGS = new ol.layer.Tile({
  extent: lublin,
  source: new ol.source.XYZ({
    attributions: [new ol.Attribution({html: 'fuhrerdurchlublinWGS'})],
    url: "mapy/fuhrerdurchlublinWGS//{z}/{x}/{y}.png",
    tilePixelRatio: 1.000000
  })
});


var layerPL3522PmL2510 = new ol.layer.Tile({
  extent: lublin,
  source: new ol.source.XYZ({
    attributions: [new ol.Attribution({html: 'PL3522PmL2510'})],
    url: "mapy/PL3522PmL2510//{z}/{x}/{y}.png",
    tilePixelRatio: 1.000000
  })
});


var layerPL3522PmL2610 = new ol.layer.Tile({
  extent: lublin,
  source: new ol.source.XYZ({
    attributions: [new ol.Attribution({html: 'PL3522PmL2610'})],
    url: "mapy/PL3522PmL2610//{z}/{x}/{y}.png",
    tilePixelRatio: 1.000000
  })
});






//koniec warstw



var osm = new ol.layer.Tile({
  source: new ol.source.OSM()
});

var osm2 = new ol.layer.Tile({
  source: new ol.source.OSM()
});

		  		  
 var watercolor=new ol.layer.Tile({
            source: new ol.source.Stamen({
              layer: 'watercolor'
            })
          });
		  
 var terrain = new ol.layer.Tile({
                source: new ol.source.Stamen({
                    layer: 'terrain'
                })
            });
			

 var tonerlite=new ol.layer.Tile({
            source: new ol.source.Stamen({
              layer: 'toner-lite'
            })
          });
		  


var overviewMapControl = new ol.control.OverviewMap({
        // see in overviewmap-custom.html to see the custom CSS used
        className: 'ol-overviewmap ol-custom-overviewmap',
        layers: [osm2],
        collapseLabel: '\u00AB',
        label: '\u00BB',
        collapsed: false
      });
	  



 var container = document.getElementById('map');

      var map = new ol.Map({
        controls: ol.control.defaults({
          attributionOptions: ({
            collapsible: false
          })
        }).extend([mousePositionControl, scaleLineControl, overviewMapControl]),interactions : 
		ol.interaction.defaults({doubleClickZoom:false}).extend([
          new ol.interaction.DragRotateAndZoom()
        ]),
        layers: [terrain, watercolor, tonerlite, osm, layer26308KARTLublin, layerPlanMLublina1918, layerPlanLublina1930, layerPlanLublina1931, 
		layerLublin15K1932, layerPlanWielkiegoMiastaLublina1935, layerVerkehrsplan15K1939, layerLublin15K1943, 
		layerGSGS4435LUBLIN25K1943, layerM3434ALYUBLIN1941, layerPlanGorodaLublina, layerLublinNawierzchnia1939, 
		layer26312KARTLublin, layer26309KARTLublin, layer26319KARTLublin, layer26315KARTLublin, layerFauxbourgs, layer26310KARTLjublin, 
		layerWa51_1912_WGS, layerWa51_1919_WGS, layerWa51_1935_WGS, layerPL3522PmL210, layerPL3522PmL610, layerPL3522PmL31810, 
		layerPL3522PmL3101, layerPL3522PmL31710, layerPL3522PmL510, layerPL3522PmL810, layerPL3522PmL32310, 
		layerPL3522PmL30910, layerPL3522PmL1210, layerPL3522PmL1410, layerPL3522PmL15101024x1285, layerPL3522PmL2010, 
		layerPL3522PmL1810, layerPL3522PmL2410, layerPL3522PmL110, layerfuhrerdurchlublinWGS, layerPL3522PmL2510, layerPL3522PmL2610],
		renderer: 'canvas',
        target: 'map',
		loadTilesWhileAnimating: true,
        view: view
      });

	

	      // Create the graticule component
      var graticule = new ol.Graticule({
        // the style to use for the lines, optional.
        strokeStyle: new ol.style.Stroke({
          color: '#666666',
          width: 2,
          lineDash: [0.5, 4]
        }),
        showLabels: true
      });

  

	  
	  
//widok domyslny	

  /*    function onClick(id, callback) {
        document.getElementById(id).addEventListener('click', callback);
      }  */

var extendnow= map.getView().calculateExtent(map.getSize());
     // var lbn = ol.proj.fromLonLat([-0.12755, 51.507222]);
	  


    /*  onClick('home', function() {
        view.animate({
          center: lbn,
          duration: 2000
        });
      });
*/
  
  //linijka LINIE
  
   	 $(map.getViewport()).on('mouseout', function() {
        $(helpTooltipElement).addClass('hidden');
		$(helpTooltipElementPolygon).addClass('hidden');
      });
	  
	  var drawPolygon; 
      var formatArea = function(polygon) {
			var area;
			var output;
			
			area = Math.round(polygon.getArea() * 100) / 100;
			output = (Math.round(area / 1000000 * 100) / 100) +
				  ' ' + 'km<sup>2</sup>';
			
			return output;
      };


     var draw; 
     var formatLength = function(line) {

        var length;
		console.log(length);
		
        var output;
     
          length = Math.round(line.getLength() * 100) / 100;
      
          output = (Math.round(length / 1000 * 100) / 100) +
              ' ' + 'km';
      
        return output;
      };


      function addInteraction() {
		  
		 if (licznikLinia == true || licznikPoligon == false){
			 
				var type = 'LineString';
				draw = new ol.interaction.Draw({
				  source: source,
				  type: /** @type {ol.geom.GeometryType} */ (type),
				  style: new ol.style.Style({
					stroke: new ol.style.Stroke({
					  color: 'rgba(0, 0, 0, 0.5)',
					  lineDash: [10, 10],
					  width: 2
					}),
					image: new ol.style.Circle({
					  radius: 5,
					  stroke: new ol.style.Stroke({
						color: 'rgba(0, 0, 0, 0.7)'
					  }),
					  fill: new ol.style.Fill({
						color: 'rgba(255, 255, 255, 0.2)'
					  })
					})
				  })
				});
				
				map.addInteraction(draw);
				createMeasureTooltip();

				var listener;
				draw.on('drawstart',
					function(evt) {
					  sketch = evt.feature;

					  /** @type {ol.Coordinate|undefined} */
					  var tooltipCoord = evt.coordinate;

					  listener = sketch.getGeometry().on('change', function(evt) {
						var geom = evt.target;
						var output;
						
						 output = formatLength(geom);
						 tooltipCoord = geom.getLastCoordinate();
						
						measureTooltipElement.innerHTML = output;
						measureTooltip.setPosition(tooltipCoord);
					  });
					}, this);

				draw.on('drawend',
					function() {
					  measureTooltipElement.className = 'tooltip tooltip-static';
					  measureTooltip.setOffset([0, -7]);
					  sketch = null;
					  measureTooltipElement = null;
					  					  
					  createMeasureTooltip();
					  map.removeInteraction(draw); 
					   
					  ol.Observable.unByKey(listener);
								 
					}, this);
			 
		 }else{
			 
			 	var type = 'Polygon';
				        drawPolygon = new ol.interaction.Draw({
						  source: sourcePolygon,
						  type: type,
						  style: new ol.style.Style({
							fill: new ol.style.Fill({
							  color: 'rgba(255, 255, 255, 0.2)'
							}),
							stroke: new ol.style.Stroke({
							  color: 'rgba(0, 0, 0, 0.5)',
							  lineDash: [10, 10],
							  width: 2
							}),
							image: new ol.style.Circle({
							  radius: 5,
							  stroke: new ol.style.Stroke({
								color: 'rgba(0, 0, 0, 0.7)'
							  }),
							  fill: new ol.style.Fill({
								color: 'rgba(255, 255, 255, 0.2)'
							  })
							})
						  })
						});
						
				map.addInteraction(drawPolygon);
				createMeasureTooltipPolygon();

				var listener;
				drawPolygon.on('drawstart',
					function(evt) {
					  sketch = evt.feature;

					  /** @type {ol.Coordinate|undefined} */
					  var tooltipCoord = evt.coordinate;

					  listener = sketch.getGeometry().on('change', function(evt) {
						var geom = evt.target;
						var output;
						
					  output = formatArea(geom);
					  tooltipCoord = geom.getInteriorPoint().getCoordinates();
						
						measureTooltipElementPolygon.innerHTML = output;
						measureTooltipPolygon.setPosition(tooltipCoord);
					  });
					}, this);

				drawPolygon.on('drawend',
					function() {
					  measureTooltipElementPolygon.className = 'tooltipPolygon tooltip-staticPolygon';
					  measureTooltipPolygon.setOffset([0, -7]);
					  sketch = null;
					  measureTooltipElementPolygon = null;

					  createMeasureTooltipPolygon();
					  map.removeInteraction(drawPolygon); 
					   
					  ol.Observable.unByKey(listener);
								 
					}, this);
			 
		 }
		  
       
			
      }
	  
	 
     function createMeasureTooltip() {
        if (measureTooltipElement) {
          measureTooltipElement.parentNode.removeChild(measureTooltipElement);
        }
        measureTooltipElement = document.createElement('div');
        measureTooltipElement.className = 'tooltip tooltip-measure';
        measureTooltip = new ol.Overlay({
            element: measureTooltipElement,
            offset: [0, -15],
            positioning: 'bottom-center'
        });
        map.addOverlay(measureTooltip);
      }

	  
	  
	 
     function createMeasureTooltipPolygon() {
        if (measureTooltipElementPolygon) {
          measureTooltipElementPolygon.parentNode.removeChild(measureTooltipElementPolygon);
        }
        measureTooltipElementPolygon = document.createElement('div');
        measureTooltipElementPolygon.className = 'tooltip tooltip-measurePolygon';
        measureTooltipPolygon = new ol.Overlay({
            element: measureTooltipElementPolygon,
            offset: [0, -15],
            positioning: 'bottom-center'
        });
        map.addOverlay(measureTooltipPolygon);
      }

  
  
 function funkcjeStartowe(){  
  	$("#home").click(function(){
			map.getView().fit(extendnow, map.getSize());
			map.getView().setZoom(12);

	});
	
	//pomiar liniowy
	
	//wywolanie pomiaru linii
	var viewMeasure= 0;
	var viewMeasure2= 0;
	
	  $("#measureLine").click(function() {
		  licznikLinia = true;
		  licznikPoligon = false;
		  
		  if(viewMeasure % 2 == 0 ){

			$(".tooltip-static").css("display", "initial");
			map.addLayer(vector);
			addInteraction();
			viewMeasure++;
		  }else{
			  map.removeInteraction(draw);
			  source.clear();
			  map.removeLayer(vector);
			  $(".tooltip-static").css("display", "none");
			  $(".tooltip-static").removeClass();
			   viewMeasure++;
			   //viewMeasure2++;
		  }
		  
		  	map.removeInteraction(drawPolygon);
			  sourcePolygon.clear();
			  map.removeLayer(vectorPolygon);
			  $(".tooltip-staticPolygon").css("display", "none");
			  $(".tooltip-staticPolygon").removeClass();
			
	  });
	  
	  //wywolanie pomiaru poligonow 	  
	  $("#measurePoligon").click(function() {
		  licznikPoligon = true;
		  licznikLinia = false;
		  
		  
		  if(viewMeasure2 % 2 == 0 ){
  
			$(".tooltip-staticPolygon").css("display", "initial");
			map.addLayer(vectorPolygon);
			addInteraction();
			viewMeasure2++;

		  }else{
			  map.removeInteraction(drawPolygon);
			  sourcePolygon.clear();
			  map.removeLayer(vectorPolygon);
			  $(".tooltip-staticPolygon").css("display", "none");
			  $(".tooltip-staticPolygon").removeClass();
			   viewMeasure2++;
			   //viewMeasure++;
		  }
		  
						
		  	map.removeInteraction(draw);
			source.clear();
			map.removeLayer(vector);
			$(".tooltip-static").css("display", "none");
			$(".tooltip-static").removeClass();
			
		  

	  });
	  
 
	  //okienko powitalne
	   $('.window_content a.window_close').on('click', function(e) {
        e.preventDefault();
 
        $(this).parent().removeClass('opened');
        $('#window_overlay').removeClass('opened');
    });
    $('.window_content').addClass('opened');
    $('#window_overlay').addClass('opened');
	
	
	//interaktywnosc checkboxow
	//tutaj trzeba bd chyba osobne rypnac do kazdej mapy w sensie po ID zrobic, a nie po klasie i idac tym tropem mozna ustawic visibility przy okazji klika, bo o no tez bd musialo bd osobne do kazdej mapy
	
//layer26308KARTLublin
	var liczniklayer26308KARTLublin = 0;
	layer26308KARTLublin.setVisible(false);
	$("#infoMapylayer26308KARTLublin").css("display", "none");
	
	var querylayer26308KARTLublin = document.querySelector('#layer26308KARTLublin');
	querylayer26308KARTLublin.addEventListener('change', function() {
		
	if(liczniklayer26308KARTLublin % 2 == 0 ){
		$("#infoMapylayer26308KARTLublin").css("display", "block");
		$("#labellayer26308KARTLublin").css("color", "#004020");  //DOPISAC DO INNYCH
		liczniklayer26308KARTLublin++;
	}else{
	$("#infoMapylayer26308KARTLublin").css("display", "none");
	$("#labellayer26308KARTLublin").css("color", "rgba(40, 40, 40, 1)"); //DOPISAC DO INNYCH
		liczniklayer26308KARTLublin++;
	}
	  var checked = this.checked;
	  if (checked !== layer26308KARTLublin.getVisible()) {
		layer26308KARTLublin.setVisible(checked);
	  }
	});

	layer26308KARTLublin.on('change:visible', function() {
	  var visible = this.getVisible();
	  if (visible !== querylayer26308KARTLublin.checked) {
		querylayer26308KARTLublin.checked = visible;
	  }
	}); 
	

	
	
	//layerPlanMLublina1918
	var liczniklayerPlanMLublina1918 = 0;
	layerPlanMLublina1918.setVisible(false);
	$("#infoMapylayerPlanMLublina1918").css("display", "none"); 		
	
	var querylayerPlanMLublina1918 = document.querySelector('#layerPlanMLublina1918');
	querylayerPlanMLublina1918.addEventListener('change', function() {
		
	if(liczniklayerPlanMLublina1918 % 2 == 0 ){
		$("#infoMapylayerPlanMLublina1918").css("display", "block"); 		
		$("#labellayerPlanMLublina1918").css("color", "#004020");
		liczniklayerPlanMLublina1918++; 
	}else{
	$("#infoMapylayerPlanMLublina1918").css("display", "none"); 		
	$("#labellayerPlanMLublina1918").css("color", "rgba(40, 40, 40, 1)");
		liczniklayerPlanMLublina1918++;
	}
	  var checked = this.checked;
	  if (checked !== layerPlanMLublina1918.getVisible()) {
		layerPlanMLublina1918.setVisible(checked);
	  }
	});

	layerPlanMLublina1918.on('change:visible', function() {
	  var visible = this.getVisible();
	  if (visible !== querylayerPlanMLublina1918.checked) {
		querylayerPlanMLublina1918.checked = visible;
	  }
	}); 
	
	
	//layerPlanLublina1930
	var liczniklayerPlanLublina1930 = 0;
	layerPlanLublina1930.setVisible(false);
	$("#infoMapylayerPlanLublina1930").css("display", "none"); 		
	
	var querylayerPlanLublina1930 = document.querySelector('#layerPlanLublina1930');
	querylayerPlanLublina1930.addEventListener('change', function() {
		
	if(liczniklayerPlanLublina1930 % 2 == 0 ){
		$("#infoMapylayerPlanLublina1930").css("display", "block"); 		
		$("#labellayerPlanLublina1930").css("color", "#004020");
		liczniklayerPlanLublina1930++;
	}else{
	$("#infoMapylayerPlanLublina1930").css("display", "none"); 		
	$("#labellayerPlanLublina1930").css("color", "rgba(40, 40, 40, 1)");
		liczniklayerPlanLublina1930++;
	}
	  var checked = this.checked;
	  if (checked !== layerPlanLublina1930.getVisible()) {
		layerPlanLublina1930.setVisible(checked);
	  }
	});

	layerPlanLublina1930.on('change:visible', function() {
	  var visible = this.getVisible();
	  if (visible !== querylayerPlanLublina1930.checked) {
		querylayerPlanLublina1930.checked = visible;
	  }
	}); 
	
	
	//layerPlanLublina1931
	var liczniklayerPlanLublina1931 = 0;
	layerPlanLublina1931.setVisible(false);
	$("#infoMapylayerPlanLublina1931").css("display", "none"); 	
	
	var querylayerPlanLublina1931 = document.querySelector('#layerPlanLublina1931');
	querylayerPlanLublina1931.addEventListener('change', function() {
		
	if(liczniklayerPlanLublina1931 % 2 == 0 ){
		$("#infoMapylayerPlanLublina1931").css("display", "block"); 		
		$("#labellayerPlanLublina1931").css("color", "#004020");
		liczniklayerPlanLublina1931++;
	}else{
	$("#infoMapylayerPlanLublina1931").css("display", "none"); 		
	$("#labellayerPlanLublina1931").css("color", "rgba(40, 40, 40, 1)");
		liczniklayerPlanLublina1931++;
	}
	  var checked = this.checked;
	  if (checked !== layerPlanLublina1931.getVisible()) {
		layerPlanLublina1931.setVisible(checked);
	  }
	});

	layerPlanLublina1931.on('change:visible', function() {
	  var visible = this.getVisible();
	  if (visible !== querylayerPlanLublina1931.checked) {
		querylayerPlanLublina1931.checked = visible;
	  }
	}); 
	
	
	//layerLublin15K1932
	var liczniklayerLublin15K1932 = 0;
	layerLublin15K1932.setVisible(false);
	$("#infoMapylayerLublin15K1932").css("display", "none"); 
	
	var querylayerLublin15K1932 = document.querySelector('#layerLublin15K1932');
	querylayerLublin15K1932.addEventListener('change', function() {
		
	if(liczniklayerLublin15K1932 % 2 == 0 ){
		$("#infoMapylayerLublin15K1932").css("display", "block"); 		
		$("#labellayerLublin15K1932").css("color", "#004020");
		liczniklayerLublin15K1932++;
	}else{
	$("#infoMapylayerLublin15K1932").css("display", "none"); 		
	$("#labellayerLublin15K1932").css("color", "rgba(40, 40, 40, 1)");
		liczniklayerLublin15K1932++;
	}
	  var checked = this.checked;
	  if (checked !== layerLublin15K1932.getVisible()) {
		layerLublin15K1932.setVisible(checked);
	  }
	});

	layerLublin15K1932.on('change:visible', function() {
	  var visible = this.getVisible();
	  if (visible !== querylayerLublin15K1932.checked) {
		querylayerLublin15K1932.checked = visible;
	  }
	}); 
	
	
	//layerPlanWielkiegoMiastaLublina1935
	var liczniklayerPlanWielkiegoMiastaLublina1935 = 0;
	layerPlanWielkiegoMiastaLublina1935.setVisible(false);
	$("#infoMapylayerPlanWielkiegoMiastaLublina1935").css("display", "none"); 	
	
	var querylayerPlanWielkiegoMiastaLublina1935 = document.querySelector('#layerPlanWielkiegoMiastaLublina1935');
	querylayerPlanWielkiegoMiastaLublina1935.addEventListener('change', function() {
		
	if(liczniklayerPlanWielkiegoMiastaLublina1935 % 2 == 0 ){
		$("#infoMapylayerPlanWielkiegoMiastaLublina1935").css("display", "block"); 		
		$("#labellayerPlanWielkiegoMiastaLublina1935").css("color", "#004020");
		liczniklayerPlanWielkiegoMiastaLublina1935++;
	}else{
	$("#infoMapylayerPlanWielkiegoMiastaLublina1935").css("display", "none"); 		
	$("#labellayerPlanWielkiegoMiastaLublina1935").css("color", "rgba(40, 40, 40, 1)");
		liczniklayerPlanWielkiegoMiastaLublina1935++;
	}
	  var checked = this.checked;
	  if (checked !== layerPlanWielkiegoMiastaLublina1935.getVisible()) {
		layerPlanWielkiegoMiastaLublina1935.setVisible(checked);
	  }
	});

	layerPlanWielkiegoMiastaLublina1935.on('change:visible', function() {
	  var visible = this.getVisible();
	  if (visible !== querylayerPlanWielkiegoMiastaLublina1935.checked) {
		querylayerPlanWielkiegoMiastaLublina1935.checked = visible;
	  }
	}); 
	
	//layerVerkehrsplan15K1939
	var liczniklayerVerkehrsplan15K1939 = 0;
	layerVerkehrsplan15K1939.setVisible(false);
	$("#infoMapylayerVerkehrsplan15K1939").css("display", "none"); 		
	
	var querylayerVerkehrsplan15K1939 = document.querySelector('#layerVerkehrsplan15K1939');
	querylayerVerkehrsplan15K1939.addEventListener('change', function() {
		
	if(liczniklayerVerkehrsplan15K1939 % 2 == 0 ){
		$("#infoMapylayerVerkehrsplan15K1939").css("display", "block"); 		
		$("#labellayerVerkehrsplan15K1939").css("color", "#004020");
		liczniklayerVerkehrsplan15K1939++;
	}else{
	$("#infoMapylayerVerkehrsplan15K1939").css("display", "none"); 		
	$("#labellayerVerkehrsplan15K1939").css("color", "rgba(40, 40, 40, 1)");
		liczniklayerVerkehrsplan15K1939++;
	}
	  var checked = this.checked;
	  if (checked !== layerVerkehrsplan15K1939.getVisible()) {
		layerVerkehrsplan15K1939.setVisible(checked);
	  }
	});

	layerVerkehrsplan15K1939.on('change:visible', function() {
	  var visible = this.getVisible();
	  if (visible !== querylayerVerkehrsplan15K1939.checked) {
		querylayerVerkehrsplan15K1939.checked = visible;
	  }
	}); 
	
	//layerLublin15K1943
	var liczniklayerLublin15K1943 = 0;
	layerLublin15K1943.setVisible(false);
	$("#infoMapylayerLublin15K1943").css("display", "none"); 	
	
	var querylayerLublin15K1943 = document.querySelector('#layerLublin15K1943');
	querylayerLublin15K1943.addEventListener('change', function() {
		
	if(liczniklayerLublin15K1943 % 2 == 0 ){
		$("#infoMapylayerLublin15K1943").css("display", "block"); 		
		$("#labellayerLublin15K1943").css("color", "#004020");
		liczniklayerLublin15K1943++;
	}else{
	$("#infoMapylayerLublin15K1943").css("display", "none"); 		
	$("#labellayerLublin15K1943").css("color", "rgba(40, 40, 40, 1)");
		liczniklayerLublin15K1943++;
	}
	  var checked = this.checked;
	  if (checked !== layerLublin15K1943.getVisible()) {
		layerLublin15K1943.setVisible(checked);
	  }
	});

	layerLublin15K1943.on('change:visible', function() {
	  var visible = this.getVisible();
	  if (visible !== querylayerLublin15K1943.checked) {
		querylayerLublin15K1943.checked = visible;
	  }
	}); 
	
	//layerGSGS4435LUBLIN25K1943
	var liczniklayerGSGS4435LUBLIN25K1943 = 0;
	layerGSGS4435LUBLIN25K1943.setVisible(false);
	$("#infoMapylayerGSGS4435LUBLIN25K1943").css("display", "none"); 		
	
	var querylayerGSGS4435LUBLIN25K1943 = document.querySelector('#layerGSGS4435LUBLIN25K1943');
	querylayerGSGS4435LUBLIN25K1943.addEventListener('change', function() {
		
	if(liczniklayerGSGS4435LUBLIN25K1943 % 2 == 0 ){
		$("#infoMapylayerGSGS4435LUBLIN25K1943").css("display", "block"); 		
		$("#labellayerGSGS4435LUBLIN25K1943").css("color", "#004020");
		liczniklayerGSGS4435LUBLIN25K1943++;
	}else{
	$("#infoMapylayerGSGS4435LUBLIN25K1943").css("display", "none"); 		
	$("#labellayerGSGS4435LUBLIN25K1943").css("color", "rgba(40, 40, 40, 1)");
		liczniklayerGSGS4435LUBLIN25K1943++;
	}
	  var checked = this.checked;
	  if (checked !== layerGSGS4435LUBLIN25K1943.getVisible()) {
		layerGSGS4435LUBLIN25K1943.setVisible(checked);
	  }
	});

	layerGSGS4435LUBLIN25K1943.on('change:visible', function() {
	  var visible = this.getVisible();
	  if (visible !== querylayerGSGS4435LUBLIN25K1943.checked) {
		querylayerGSGS4435LUBLIN25K1943.checked = visible;
	  }
	}); 
	
	
	//layerM3434ALYUBLIN1941
	var liczniklayerM3434ALYUBLIN1941 = 0;
	layerM3434ALYUBLIN1941.setVisible(false);
	$("#infoMapylayerM3434ALYUBLIN1941").css("display", "none"); 		
	
	var querylayerM3434ALYUBLIN1941 = document.querySelector('#layerM3434ALYUBLIN1941');
	querylayerM3434ALYUBLIN1941.addEventListener('change', function() {
		
	if(liczniklayerM3434ALYUBLIN1941 % 2 == 0 ){
		$("#infoMapylayerM3434ALYUBLIN1941").css("display", "block"); 		
		$("#labellayerM3434ALYUBLIN1941").css("color", "#004020");
		liczniklayerM3434ALYUBLIN1941++;
	}else{
	$("#infoMapylayerM3434ALYUBLIN1941").css("display", "none"); 		
	$("#labellayerM3434ALYUBLIN1941").css("color", "rgba(40, 40, 40, 1)");
		liczniklayerM3434ALYUBLIN1941++;
	}
	  var checked = this.checked;
	  if (checked !== layerM3434ALYUBLIN1941.getVisible()) {
		layerM3434ALYUBLIN1941.setVisible(checked);
	  }
	});

	layerM3434ALYUBLIN1941.on('change:visible', function() {
	  var visible = this.getVisible();
	  if (visible !== querylayerM3434ALYUBLIN1941.checked) {
		querylayerM3434ALYUBLIN1941.checked = visible;
	  }
	}); 
	
	
	//layerPlanGorodaLublina
	var liczniklayerPlanGorodaLublina = 0;
	layerPlanGorodaLublina.setVisible(false);
	$("#infoMapylayerPlanGorodaLublina").css("display", "none"); 	
	
	var querylayerPlanGorodaLublina = document.querySelector('#layerPlanGorodaLublina');
	querylayerPlanGorodaLublina.addEventListener('change', function() {
		
	if(liczniklayerPlanGorodaLublina % 2 == 0 ){
		$("#infoMapylayerPlanGorodaLublina").css("display", "block"); 		
		$("#labellayerPlanGorodaLublina").css("color", "#004020");
		liczniklayerPlanGorodaLublina++;
	}else{
	$("#infoMapylayerPlanGorodaLublina").css("display", "none"); 		
	$("#labellayerPlanGorodaLublina").css("color", "rgba(40, 40, 40, 1)");
		liczniklayerPlanGorodaLublina++;
	}
	  var checked = this.checked;
	  if (checked !== layerPlanGorodaLublina.getVisible()) {
		layerPlanGorodaLublina.setVisible(checked);
	  }
	});

	layerPlanGorodaLublina.on('change:visible', function() {
	  var visible = this.getVisible();
	  if (visible !== querylayerPlanGorodaLublina.checked) {
		querylayerPlanGorodaLublina.checked = visible;
	  }
	}); 
	
	
	//layerLublinNawierzchnia1939
	var liczniklayerLublinNawierzchnia1939 = 0;
	layerLublinNawierzchnia1939.setVisible(false);
	$("#infoMapylayerLublinNawierzchnia1939").css("display", "none"); 	
	
	var querylayerLublinNawierzchnia1939 = document.querySelector('#layerLublinNawierzchnia1939');
	querylayerLublinNawierzchnia1939.addEventListener('change', function() {
		
	if(liczniklayerLublinNawierzchnia1939 % 2 == 0 ){
		$("#infoMapylayerLublinNawierzchnia1939").css("display", "block"); 		
		$("#labellayerLublinNawierzchnia1939").css("color", "#004020");
		liczniklayerLublinNawierzchnia1939++;
	}else{
	$("#infoMapylayerLublinNawierzchnia1939").css("display", "none"); 		
	$("#labellayerLublinNawierzchnia1939").css("color", "rgba(40, 40, 40, 1)");
		liczniklayerLublinNawierzchnia1939++;
	}
	  var checked = this.checked;
	  if (checked !== layerLublinNawierzchnia1939.getVisible()) {
		layerLublinNawierzchnia1939.setVisible(checked);
	  }
	});

	layerLublinNawierzchnia1939.on('change:visible', function() {
	  var visible = this.getVisible();
	  if (visible !== querylayerLublinNawierzchnia1939.checked) {
		querylayerLublinNawierzchnia1939.checked = visible;
	  }
	}); 
	
	//layer26312KARTLublin
	var liczniklayer26312KARTLublin = 0;
	layer26312KARTLublin.setVisible(false);
	$("#infoMapylayer26312KARTLublin").css("display", "none"); 	
	
	var querylayer26312KARTLublin = document.querySelector('#layer26312KARTLublin');
	querylayer26312KARTLublin.addEventListener('change', function() {
		
	if(liczniklayer26312KARTLublin % 2 == 0 ){
		$("#infoMapylayer26312KARTLublin").css("display", "block"); 		
		$("#labellayer26312KARTLublin").css("color", "#004020");
		liczniklayer26312KARTLublin++;
	}else{
	$("#infoMapylayer26312KARTLublin").css("display", "none"); 		
	$("#labellayer26312KARTLublin").css("color", "rgba(40, 40, 40, 1)");
		liczniklayer26312KARTLublin++;
	}
	  var checked = this.checked;
	  if (checked !== layer26312KARTLublin.getVisible()) {
		layer26312KARTLublin.setVisible(checked);
	  }
	});

	layer26312KARTLublin.on('change:visible', function() {
	  var visible = this.getVisible();
	  if (visible !== querylayer26312KARTLublin.checked) {
		querylayer26312KARTLublin.checked = visible;
	  }
	}); 
	
	//layer26309KARTLublin
	var liczniklayer26309KARTLublin = 0;
	layer26309KARTLublin.setVisible(false);
	$("#infoMapylayer26309KARTLublin").css("display", "none"); 	
	
	var querylayer26309KARTLublin = document.querySelector('#layer26309KARTLublin');
	querylayer26309KARTLublin.addEventListener('change', function() {
		
	if(liczniklayer26309KARTLublin % 2 == 0 ){
		$("#infoMapylayer26309KARTLublin").css("display", "block"); 		
		$("#labellayer26309KARTLublin").css("color", "#004020");
		liczniklayer26309KARTLublin++;
	}else{
	$("#infoMapylayer26309KARTLublin").css("display", "none"); 		
	$("#labellayer26309KARTLublin").css("color", "rgba(40, 40, 40, 1)");
		liczniklayer26309KARTLublin++;
	}
	  var checked = this.checked;
	  if (checked !== layer26309KARTLublin.getVisible()) {
		layer26309KARTLublin.setVisible(checked);
	  }
	});

	layer26309KARTLublin.on('change:visible', function() {
	  var visible = this.getVisible();
	  if (visible !== querylayer26309KARTLublin.checked) {
		querylayer26309KARTLublin.checked = visible;
	  }
	}); 
	
	//layer26319KARTLublin
	var liczniklayer26319KARTLublin = 0;
	layer26319KARTLublin.setVisible(false);
	$("#infoMapylayer26319KARTLublin").css("display", "none"); 	
	
	var querylayer26319KARTLublin = document.querySelector('#layer26319KARTLublin');
	querylayer26319KARTLublin.addEventListener('change', function() {
		
	if(liczniklayer26319KARTLublin % 2 == 0 ){
		$("#infoMapylayer26319KARTLublin").css("display", "block"); 		
		$("#labellayer26319KARTLublin").css("color", "#004020");
		liczniklayer26319KARTLublin++;
	}else{
	$("#infoMapylayer26319KARTLublin").css("display", "none"); 		
	$("#labellayer26319KARTLublin").css("color", "rgba(40, 40, 40, 1)");
		liczniklayer26319KARTLublin++;
	}
	  var checked = this.checked;
	  if (checked !== layer26319KARTLublin.getVisible()) {
		layer26319KARTLublin.setVisible(checked);
	  }
	});

	layer26319KARTLublin.on('change:visible', function() {
	  var visible = this.getVisible();
	  if (visible !== querylayer26319KARTLublin.checked) {
		querylayer26319KARTLublin.checked = visible;
	  }
	}); 
	
	//layer26315KARTLublin
	var liczniklayer26315KARTLublin = 0;
	layer26315KARTLublin.setVisible(false);
	$("#infoMapylayer26315KARTLublin").css("display", "none"); 	
	
	var querylayer26315KARTLublin = document.querySelector('#layer26315KARTLublin');
	querylayer26315KARTLublin.addEventListener('change', function() {
		
	if(liczniklayer26315KARTLublin % 2 == 0 ){
		$("#infoMapylayer26315KARTLublin").css("display", "block"); 		
		$("#labellayer26315KARTLublin").css("color", "#004020");
		liczniklayer26315KARTLublin++;
	}else{
	$("#infoMapylayer26315KARTLublin").css("display", "none"); 		
	$("#labellayer26315KARTLublin").css("color", "rgba(40, 40, 40, 1)");
		liczniklayer26315KARTLublin++;
	}
	  var checked = this.checked;
	  if (checked !== layer26315KARTLublin.getVisible()) {
		layer26315KARTLublin.setVisible(checked);
	  }
	});

	layer26315KARTLublin.on('change:visible', function() {
	  var visible = this.getVisible();
	  if (visible !== querylayer26315KARTLublin.checked) {
		querylayer26315KARTLublin.checked = visible;
	  }
	}); 
	
	// layerFauxbourgs
	var liczniklayerFauxbourgs = 0;
	layerFauxbourgs.setVisible(false);
	$("#infoMapylayerFauxbourgs").css("display", "none"); 	
	
	var querylayerFauxbourgs = document.querySelector('#layerFauxbourgs');
	querylayerFauxbourgs.addEventListener('change', function() {
		
	if(liczniklayerFauxbourgs % 2 == 0 ){
		$("#infoMapylayerFauxbourgs").css("display", "block"); 		
		$("#labellayerFauxbourgs").css("color", "#004020");
		liczniklayerFauxbourgs++;
	}else{
	$("#infoMapylayerFauxbourgs").css("display", "none"); 		
	$("#labellayerFauxbourgs").css("color", "rgba(40, 40, 40, 1)");
		liczniklayerFauxbourgs++;
	}
	  var checked = this.checked;
	  if (checked !== layerFauxbourgs.getVisible()) {
		layerFauxbourgs.setVisible(checked);
	  }
	});

	layerFauxbourgs.on('change:visible', function() {
	  var visible = this.getVisible();
	  if (visible !== querylayerFauxbourgs.checked) {
		querylayerFauxbourgs.checked = visible;
	  }
	}); 
	
	//layer26310KARTLjublin
	var liczniklayer26310KARTLjublin = 0;
	layer26310KARTLjublin.setVisible(false);
	$("#infoMapylayer26310KARTLjublin").css("display", "none"); 	
	
	var querylayer26310KARTLjublin = document.querySelector('#layer26310KARTLjublin');
	querylayer26310KARTLjublin.addEventListener('change', function() {
		
	if(liczniklayer26310KARTLjublin % 2 == 0 ){
		$("#infoMapylayer26310KARTLjublin").css("display", "block"); 		
		$("#labellayer26310KARTLjublin").css("color", "#004020");
		liczniklayer26310KARTLjublin++;
	}else{
	$("#infoMapylayer26310KARTLjublin").css("display", "none"); 		
	$("#labellayer26310KARTLjublin").css("color", "rgba(40, 40, 40, 1)");
		liczniklayer26310KARTLjublin++;
	}
	  var checked = this.checked;
	  if (checked !== layer26310KARTLjublin.getVisible()) {
		layer26310KARTLjublin.setVisible(checked);
	  }
	});

	layer26310KARTLjublin.on('change:visible', function() {
	  var visible = this.getVisible();
	  if (visible !== querylayer26310KARTLjublin.checked) {
		querylayer26310KARTLjublin.checked = visible;
	  }
	}); 
	
	
	//layerWa51_1912_WGS
	var liczniklayerWa51_1912_WGS = 0;
	layerWa51_1912_WGS.setVisible(false);
	$("#infoMapylayerWa51_1912_WGS").css("display", "none"); 	
	
	var querylayerWa51_1912_WGS = document.querySelector('#layerWa51_1912_WGS');
	querylayerWa51_1912_WGS.addEventListener('change', function() {
		
	if(liczniklayerWa51_1912_WGS % 2 == 0 ){
		$("#infoMapylayerWa51_1912_WGS").css("display", "block"); 		
		$("#labellayerWa51_1912_WGS").css("color", "#004020");
		liczniklayerWa51_1912_WGS++;
	}else{
	$("#infoMapylayerWa51_1912_WGS").css("display", "none"); 		
	$("#labellayerWa51_1912_WGS").css("color", "rgba(40, 40, 40, 1)");
		liczniklayerWa51_1912_WGS++;
	}
	  var checked = this.checked;
	  if (checked !== layerWa51_1912_WGS.getVisible()) {
		layerWa51_1912_WGS.setVisible(checked);
	  }
	});

	layerWa51_1912_WGS.on('change:visible', function() {
	  var visible = this.getVisible();
	  if (visible !== querylayerWa51_1912_WGS.checked) {
		querylayerWa51_1912_WGS.checked = visible;
	  }
	}); 
	
	//layerWa51_1919_WGS
	var liczniklayerWa51_1919_WGS = 0;
	layerWa51_1919_WGS.setVisible(false);
	$("#infoMapylayerWa51_1919_WGS").css("display", "none"); 	
	
	var querylayerWa51_1919_WGS = document.querySelector('#layerWa51_1919_WGS');
	querylayerWa51_1919_WGS.addEventListener('change', function() {
		
	if(liczniklayerWa51_1919_WGS % 2 == 0 ){
		$("#infoMapylayerWa51_1919_WGS").css("display", "block"); 		
		$("#labellayerWa51_1919_WGS").css("color", "#004020");
		liczniklayerWa51_1919_WGS++;
	}else{
	$("#infoMapylayerWa51_1919_WGS").css("display", "none"); 		
	$("#labellayerWa51_1919_WGS").css("color", "rgba(40, 40, 40, 1)");
		liczniklayerWa51_1919_WGS++;
	}
	  var checked = this.checked;
	  if (checked !== layerWa51_1919_WGS.getVisible()) {
		layerWa51_1919_WGS.setVisible(checked);
	  }
	});

	layerWa51_1919_WGS.on('change:visible', function() {
	  var visible = this.getVisible();
	  if (visible !== querylayerWa51_1919_WGS.checked) {
		querylayerWa51_1919_WGS.checked = visible;
	  }
	}); 
	
	//layerWa51_1935_WGS
	var liczniklayerWa51_1935_WGS = 0;
	layerWa51_1935_WGS.setVisible(false);
	$("#infoMapylayerWa51_1935_WGS").css("display", "none"); 	
	
	var querylayerWa51_1935_WGS = document.querySelector('#layerWa51_1935_WGS');
	querylayerWa51_1935_WGS.addEventListener('change', function() {
		
	if(liczniklayerWa51_1935_WGS % 2 == 0 ){
		$("#infoMapylayerWa51_1935_WGS").css("display", "block"); 		
		$("#labellayerWa51_1935_WGS").css("color", "#004020");
		liczniklayerWa51_1935_WGS++;
	}else{
	$("#infoMapylayerWa51_1935_WGS").css("display", "none"); 		
	$("#labellayerWa51_1935_WGS").css("color", "rgba(40, 40, 40, 1)");
		liczniklayerWa51_1935_WGS++;
	}
	  var checked = this.checked;
	  if (checked !== layerWa51_1935_WGS.getVisible()) {
		layerWa51_1935_WGS.setVisible(checked);
	  }
	});

	layerWa51_1935_WGS.on('change:visible', function() {
	  var visible = this.getVisible();
	  if (visible !== querylayerWa51_1935_WGS.checked) {
		querylayerWa51_1935_WGS.checked = visible;
	  }
	}); 
	
	
	//layerPL3522PmL210
	var liczniklayerPL3522PmL210 = 0;
	layerPL3522PmL210.setVisible(false);
	$("#infoMapylayerPL3522PmL210").css("display", "none"); 
	
	var querylayerPL3522PmL210 = document.querySelector('#layerPL3522PmL210');
	querylayerPL3522PmL210.addEventListener('change', function() {
		
	if(liczniklayerPL3522PmL210 % 2 == 0 ){
		$("#infoMapylayerPL3522PmL210").css("display", "block"); 		
		$("#labellayerPL3522PmL210").css("color", "#004020");
		liczniklayerPL3522PmL210++;
	}else{
	$("#infoMapylayerPL3522PmL210").css("display", "none"); 		
	$("#labellayerPL3522PmL210").css("color", "rgba(40, 40, 40, 1)");
		liczniklayerPL3522PmL210++;
	}
	  var checked = this.checked;
	  if (checked !== layerPL3522PmL210.getVisible()) {
		layerPL3522PmL210.setVisible(checked);
	  }
	});

	layerPL3522PmL210.on('change:visible', function() {
	  var visible = this.getVisible();
	  if (visible !== querylayerPL3522PmL210.checked) {
		querylayerPL3522PmL210.checked = visible;
	  }
	}); 
	
	//layerPL3522PmL610
	var liczniklayerPL3522PmL610 = 0;
	layerPL3522PmL610.setVisible(false);
	$("#infoMapylayerPL3522PmL610").css("display", "none"); 	
	
	var querylayerPL3522PmL610 = document.querySelector('#layerPL3522PmL610');
	querylayerPL3522PmL610.addEventListener('change', function() {
		
	if(liczniklayerPL3522PmL610 % 2 == 0 ){
		$("#infoMapylayerPL3522PmL610").css("display", "block"); 		
		$("#labellayerPL3522PmL610").css("color", "#004020");
		liczniklayerPL3522PmL610++;
	}else{
	$("#infoMapylayerPL3522PmL610").css("display", "none"); 		
	$("#labellayerPL3522PmL610").css("color", "rgba(40, 40, 40, 1)");
		liczniklayerPL3522PmL610++;
	}
	  var checked = this.checked;
	  if (checked !== layerPL3522PmL610.getVisible()) {
		layerPL3522PmL610.setVisible(checked);
	  }
	});

	layerPL3522PmL610.on('change:visible', function() {
	  var visible = this.getVisible();
	  if (visible !== querylayerPL3522PmL610.checked) {
		querylayerPL3522PmL610.checked = visible;
	  }
	}); 
	
	//layerPL3522PmL31810 
	var liczniklayerPL3522PmL31810  = 0;
	layerPL3522PmL31810.setVisible(false);
	$("#infoMapylayerPL3522PmL31810").css("display", "none"); 	
	
	var querylayerPL3522PmL31810 = document.querySelector('#layerPL3522PmL31810');
	querylayerPL3522PmL31810.addEventListener('change', function() {
		
	if(liczniklayerPL3522PmL31810 % 2 == 0 ){
		$("#infoMapylayerPL3522PmL31810").css("display", "block"); 		
		$("#labellayerPL3522PmL31810").css("color", "#004020");
		liczniklayerPL3522PmL31810 ++;
	}else{
	$("#infoMapylayerPL3522PmL31810").css("display", "none"); 		
	$("#labellayerPL3522PmL31810").css("color", "rgba(40, 40, 40, 1)");
		liczniklayerPL3522PmL31810 ++;
	}
	  var checked = this.checked;
	  if (checked !== layerPL3522PmL31810.getVisible()) {
		layerPL3522PmL31810.setVisible(checked);
	  }
	});

	layerPL3522PmL31810.on('change:visible', function() {
	  var visible = this.getVisible();
	  if (visible !== querylayerPL3522PmL31810.checked) {
		querylayerPL3522PmL31810.checked = visible;
	  }
	}); 
	
	//layerPL3522PmL3101
	var liczniklayerPL3522PmL3101 = 0;
	layerPL3522PmL3101.setVisible(false);
	$("#infoMapylayerPL3522PmL3101").css("display", "none"); 	
	
	var querylayerPL3522PmL3101 = document.querySelector('#layerPL3522PmL3101');
	querylayerPL3522PmL3101.addEventListener('change', function() {
		
	if(liczniklayerPL3522PmL3101 % 2 == 0 ){
		$("#infoMapylayerPL3522PmL3101").css("display", "block"); 		
		$("#labellayerPL3522PmL3101").css("color", "#004020");
		liczniklayerPL3522PmL3101++;
	}else{
	$("#infoMapylayerPL3522PmL3101").css("display", "none"); 		
	$("#labellayerPL3522PmL3101").css("color", "rgba(40, 40, 40, 1)");
		liczniklayerPL3522PmL3101++;
	}
	  var checked = this.checked;
	  if (checked !== layerPL3522PmL3101.getVisible()) {
		layerPL3522PmL3101.setVisible(checked);
	  }
	});

	layerPL3522PmL3101.on('change:visible', function() {
	  var visible = this.getVisible();
	  if (visible !== querylayerPL3522PmL3101.checked) {
		querylayerPL3522PmL3101.checked = visible;
	  }
	}); 
	
	//layerPL3522PmL31710
	var liczniklayerPL3522PmL31710 = 0;
	layerPL3522PmL31710.setVisible(false);
	$("#infoMapylayerPL3522PmL31710").css("display", "none"); 
	
	var querylayerPL3522PmL31710 = document.querySelector('#layerPL3522PmL31710');
	querylayerPL3522PmL31710.addEventListener('change', function() {
		
	if(liczniklayerPL3522PmL31710 % 2 == 0 ){
		$("#infoMapylayerPL3522PmL31710").css("display", "block"); 		
		$("#labellayerPL3522PmL31710").css("color", "#004020");
		liczniklayerPL3522PmL31710++;
	}else{
	$("#infoMapylayerPL3522PmL31710").css("display", "none"); 		
	$("#labellayerPL3522PmL31710").css("color", "rgba(40, 40, 40, 1)");
		liczniklayerPL3522PmL31710++;
	}
	  var checked = this.checked;
	  if (checked !== layerPL3522PmL31710.getVisible()) {
		layerPL3522PmL31710.setVisible(checked);
	  }
	});

	layerPL3522PmL31710.on('change:visible', function() {
	  var visible = this.getVisible();
	  if (visible !== querylayerPL3522PmL31710.checked) {
		querylayerPL3522PmL31710.checked = visible;
	  }
	}); 
	
	//layerPL3522PmL510
	var liczniklayerPL3522PmL510 = 0;
	layerPL3522PmL510.setVisible(false);
	$("#infoMapylayerPL3522PmL510").css("display", "none"); 	
	
	var querylayerPL3522PmL510 = document.querySelector('#layerPL3522PmL510');
	querylayerPL3522PmL510.addEventListener('change', function() {
		
	if(liczniklayerPL3522PmL510 % 2 == 0 ){
		$("#infoMapylayerPL3522PmL510").css("display", "block"); 		
		$("#labellayerPL3522PmL510").css("color", "#004020");
		liczniklayerPL3522PmL510++;
	}else{
	$("#infoMapylayerPL3522PmL510").css("display", "none"); 		
	$("#labellayerPL3522PmL510").css("color", "rgba(40, 40, 40, 1)");
		liczniklayerPL3522PmL510++;
	}
	  var checked = this.checked;
	  if (checked !== layerPL3522PmL510.getVisible()) {
		layerPL3522PmL510.setVisible(checked);
	  }
	});

	layerPL3522PmL510.on('change:visible', function() {
	  var visible = this.getVisible();
	  if (visible !== querylayerPL3522PmL510.checked) {
		querylayerPL3522PmL510.checked = visible;
	  }
	}); 
	
	//layerPL3522PmL810 
	var liczniklayerPL3522PmL810 = 0;
	layerPL3522PmL810.setVisible(false);
	$("#infoMapylayerPL3522PmL810").css("display", "none"); 	
	
	var querylayerPL3522PmL810 = document.querySelector('#layerPL3522PmL810');
	querylayerPL3522PmL810 .addEventListener('change', function() {
		
	if(liczniklayerPL3522PmL810  % 2 == 0 ){
		$("#infoMapylayerPL3522PmL810").css("display", "block"); 		
		$("#labellayerPL3522PmL810").css("color", "#004020");
		liczniklayerPL3522PmL810 ++;
	}else{
	$("#infoMapylayerPL3522PmL810").css("display", "none"); 		
	$("#labellayerPL3522PmL810").css("color", "rgba(40, 40, 40, 1)");
		liczniklayerPL3522PmL810 ++;
	}
	  var checked = this.checked;
	  if (checked !== layerPL3522PmL810.getVisible()) {
		layerPL3522PmL810.setVisible(checked);
	  }
	});

	layerPL3522PmL810.on('change:visible', function() {
	  var visible = this.getVisible();
	  if (visible !== querylayerPL3522PmL810.checked) {
		querylayerPL3522PmL810.checked = visible;
	  }
	}); 
	
	
	//layerPL3522PmL32310
	var liczniklayerPL3522PmL32310 = 0;
	layerPL3522PmL32310.setVisible(false);
	$("#infoMapylayerPL3522PmL32310").css("display", "none"); 	
	
	var querylayerPL3522PmL32310 = document.querySelector('#layerPL3522PmL32310');
	querylayerPL3522PmL32310.addEventListener('change', function() {
		
	if(liczniklayerPL3522PmL32310 % 2 == 0 ){
		$("#infoMapylayerPL3522PmL32310").css("display", "block"); 		
		$("#labellayerPL3522PmL32310").css("color", "#004020");
		liczniklayerPL3522PmL32310++;
	}else{
	$("#infoMapylayerPL3522PmL32310").css("display", "none"); 		
	$("#labellayerPL3522PmL32310").css("color", "rgba(40, 40, 40, 1)");
		liczniklayerPL3522PmL32310++;
	}
	  var checked = this.checked;
	  if (checked !== layerPL3522PmL32310.getVisible()) {
		layerPL3522PmL32310.setVisible(checked);
	  }
	});

	layerPL3522PmL32310.on('change:visible', function() {
	  var visible = this.getVisible();
	  if (visible !== querylayerPL3522PmL32310.checked) {
		querylayerPL3522PmL32310.checked = visible;
	  }
	}); 
	
	//layerPL3522PmL30910
	var liczniklayerPL3522PmL30910 = 0;
	layerPL3522PmL30910.setVisible(false);
	$("#infoMapylayerPL3522PmL30910").css("display", "none"); 
	
	var querylayerPL3522PmL30910 = document.querySelector('#layerPL3522PmL30910');
	querylayerPL3522PmL30910.addEventListener('change', function() {
		
	if(liczniklayerPL3522PmL30910 % 2 == 0 ){
		$("#infoMapylayerPL3522PmL30910").css("display", "block"); 		
		$("#labellayerPL3522PmL30910").css("color", "#004020");
		liczniklayerPL3522PmL30910++;
	}else{
	$("#infoMapylayerPL3522PmL30910").css("display", "none"); 		
	$("#labellayerPL3522PmL30910").css("color", "rgba(40, 40, 40, 1)");
		liczniklayerPL3522PmL30910++;
	}
	  var checked = this.checked;
	  if (checked !== layerPL3522PmL30910.getVisible()) {
		layerPL3522PmL30910.setVisible(checked);
	  }
	});

	layerPL3522PmL30910.on('change:visible', function() {
	  var visible = this.getVisible();
	  if (visible !== querylayerPL3522PmL30910.checked) {
		querylayerPL3522PmL30910.checked = visible;
	  }
	});
	
	//layerPL3522PmL1210	
	var liczniklayerPL3522PmL1210 = 0;
	layerPL3522PmL1210.setVisible(false);
	$("#infoMapylayerPL3522PmL1210").css("display", "none"); 	
	
	var querylayerPL3522PmL1210 = document.querySelector('#layerPL3522PmL1210');
	querylayerPL3522PmL1210.addEventListener('change', function() {
		
	if(liczniklayerPL3522PmL1210 % 2 == 0 ){
		$("#infoMapylayerPL3522PmL1210").css("display", "block"); 		
		$("#labellayerPL3522PmL1210").css("color", "#004020");
		liczniklayerPL3522PmL1210++;
	}else{
	$("#infoMapylayerPL3522PmL1210").css("display", "none"); 		
	$("#labellayerPL3522PmL1210").css("color", "rgba(40, 40, 40, 1)");
		liczniklayerPL3522PmL1210++;
	}
	  var checked = this.checked;
	  if (checked !== layerPL3522PmL1210.getVisible()) {
		layerPL3522PmL1210.setVisible(checked);
	  }
	});

	layerPL3522PmL1210.on('change:visible', function() {
	  var visible = this.getVisible();
	  if (visible !== querylayerPL3522PmL1210.checked) {
		querylayerPL3522PmL1210.checked = visible;
	  }
	}); 
	
	//layerPL3522PmL1410	
	var liczniklayerPL3522PmL1410 = 0;
	layerPL3522PmL1410.setVisible(false);
	$("#infoMapylayerPL3522PmL1410").css("display", "none"); 
	
	var querylayerPL3522PmL1410 = document.querySelector('#layerPL3522PmL1410');
	querylayerPL3522PmL1410.addEventListener('change', function() {
		
	if(liczniklayerPL3522PmL1410 % 2 == 0 ){
		$("#infoMapylayerPL3522PmL1410").css("display", "block"); 		$("#labellayerPL3522PmL1410").css("color", "#004020");
		liczniklayerPL3522PmL1410++;
	}else{
	$("#infoMapylayerPL3522PmL1410").css("display", "none"); 		$("#labellayerPL3522PmL1410").css("color", "rgba(40, 40, 40, 1)");
		liczniklayerPL3522PmL1410++;
	}
	  var checked = this.checked;
	  if (checked !== layerPL3522PmL1410.getVisible()) {
		layerPL3522PmL1410.setVisible(checked);
	  }
	});

	layerPL3522PmL1410.on('change:visible', function() {
	  var visible = this.getVisible();
	  if (visible !== querylayerPL3522PmL1410.checked) {
		querylayerPL3522PmL1410.checked = visible;
	  }
	}); 
	
	//layerPL3522PmL15101024x1285
	var liczniklayerPL3522PmL15101024x1285 = 0;
	layerPL3522PmL15101024x1285.setVisible(false);
	$("#infoMapylayerPL3522PmL15101024x1285").css("display", "none"); 	
	
	var querylayerPL3522PmL15101024x1285 = document.querySelector('#layerPL3522PmL15101024x1285');
	querylayerPL3522PmL15101024x1285.addEventListener('change', function() {
		
	if(liczniklayerPL3522PmL15101024x1285 % 2 == 0 ){
		$("#infoMapylayerPL3522PmL15101024x1285").css("display", "block"); 		
		$("#labellayerPL3522PmL15101024x1285").css("color", "#004020");
		liczniklayerPL3522PmL15101024x1285++;
	}else{
	$("#infoMapylayerPL3522PmL15101024x1285").css("display", "none"); 		
	$("#labellayerPL3522PmL15101024x1285").css("color", "rgba(40, 40, 40, 1)");
		liczniklayerPL3522PmL15101024x1285++;
	}
	  var checked = this.checked;
	  if (checked !== layerPL3522PmL15101024x1285.getVisible()) {
		layerPL3522PmL15101024x1285.setVisible(checked);
	  }
	});

	layerPL3522PmL15101024x1285.on('change:visible', function() {
	  var visible = this.getVisible();
	  if (visible !== querylayerPL3522PmL15101024x1285.checked) {
		querylayerPL3522PmL15101024x1285.checked = visible;
	  }
	}); 
	
	//layerPL3522PmL2010	
	var liczniklayerPL3522PmL2010 = 0;
	layerPL3522PmL2010.setVisible(false);
	$("#infoMapylayerPL3522PmL2010").css("display", "none"); 	
	
	var querylayerPL3522PmL2010 = document.querySelector('#layerPL3522PmL2010');
	querylayerPL3522PmL2010.addEventListener('change', function() {
		
	if(liczniklayerPL3522PmL2010 % 2 == 0 ){
		$("#infoMapylayerPL3522PmL2010").css("display", "block"); 		
		$("#labellayerPL3522PmL2010").css("color", "#004020");
		liczniklayerPL3522PmL2010++;
	}else{
	$("#infoMapylayerPL3522PmL2010").css("display", "none"); 		
	$("#labellayerPL3522PmL2010").css("color", "rgba(40, 40, 40, 1)");
		liczniklayerPL3522PmL2010++;
	}
	  var checked = this.checked;
	  if (checked !== layerPL3522PmL2010.getVisible()) {
		layerPL3522PmL2010.setVisible(checked);
	  }
	});

	layerPL3522PmL2010.on('change:visible', function() {
	  var visible = this.getVisible();
	  if (visible !== querylayerPL3522PmL2010.checked) {
		querylayerPL3522PmL2010.checked = visible;
	  }
	}); 
	
	
	//layerPL3522PmL1810	
	var liczniklayerPL3522PmL1810 = 0;
	layerPL3522PmL1810.setVisible(false);
	$("#infoMapylayerPL3522PmL1810").css("display", "none"); 
	
	var querylayerPL3522PmL1810 = document.querySelector('#layerPL3522PmL1810');
	querylayerPL3522PmL1810.addEventListener('change', function() {
		
	if(liczniklayerPL3522PmL1810 % 2 == 0 ){
		$("#infoMapylayerPL3522PmL1810").css("display", "block"); 		
		$("#labellayerPL3522PmL1810").css("color", "#004020");
		liczniklayerPL3522PmL1810++;
	}else{
	$("#infoMapylayerPL3522PmL1810").css("display", "none"); 		
	$("#labellayerPL3522PmL1810").css("color", "rgba(40, 40, 40, 1)");
		liczniklayerPL3522PmL1810++;
	}
	  var checked = this.checked;
	  if (checked !== layerPL3522PmL1810.getVisible()) {
		layerPL3522PmL1810.setVisible(checked);
	  }
	});

	layerPL3522PmL1810.on('change:visible', function() {
	  var visible = this.getVisible();
	  if (visible !== querylayerPL3522PmL1810.checked) {
		querylayerPL3522PmL1810.checked = visible;
	  }
	}); 
	
	
	//layerPL3522PmL2410	
	var liczniklayerPL3522PmL2410 = 0;
	layerPL3522PmL2410.setVisible(false);
	$("#infoMapylayerPL3522PmL2410").css("display", "none"); 
	
	var querylayerPL3522PmL2410 = document.querySelector('#layerPL3522PmL2410');
	querylayerPL3522PmL2410.addEventListener('change', function() {
		
	if(liczniklayerPL3522PmL2410 % 2 == 0 ){
		$("#infoMapylayerPL3522PmL2410").css("display", "block"); 		
		$("#labellayerPL3522PmL2410").css("color", "#004020");
		liczniklayerPL3522PmL2410++;
	}else{
	$("#infoMapylayerPL3522PmL2410").css("display", "none"); 		
	$("#labellayerPL3522PmL2410").css("color", "rgba(40, 40, 40, 1)");
		liczniklayerPL3522PmL2410++;
	}
	  var checked = this.checked;
	  if (checked !== layerPL3522PmL2410.getVisible()) {
		layerPL3522PmL2410.setVisible(checked);
	  }
	});

	layerPL3522PmL2410.on('change:visible', function() {
	  var visible = this.getVisible();
	  if (visible !== querylayerPL3522PmL2410.checked) {
		querylayerPL3522PmL2410.checked = visible;
	  }
	}); 
	
	//layerPL3522PmL110	
	var liczniklayerPL3522PmL110 = 0;
	layerPL3522PmL110.setVisible(false);
	$("#infoMapylayerPL3522PmL110").css("display", "none"); 	
	
	var querylayerPL3522PmL110 = document.querySelector('#layerPL3522PmL110');
	querylayerPL3522PmL110.addEventListener('change', function() {
		
	if(liczniklayerPL3522PmL110 % 2 == 0 ){
		$("#infoMapylayerPL3522PmL110").css("display", "block"); 		
		$("#labellayerPL3522PmL110").css("color", "#004020");
		liczniklayerPL3522PmL110++;
	}else{
	$("#infoMapylayerPL3522PmL110").css("display", "none"); 		
	$("#labellayerPL3522PmL110").css("color", "rgba(40, 40, 40, 1)");
		liczniklayerPL3522PmL110++;
	}
	  var checked = this.checked;
	  if (checked !== layerPL3522PmL110.getVisible()) {
		layerPL3522PmL110.setVisible(checked);
	  }
	});

	layerPL3522PmL110.on('change:visible', function() {
	  var visible = this.getVisible();
	  if (visible !== querylayerPL3522PmL110.checked) {
		querylayerPL3522PmL110.checked = visible;
	  }
	}); 
	
	//layerfuhrerdurchlublinWGS	
	var liczniklayerfuhrerdurchlublinWGS = 0;
	layerfuhrerdurchlublinWGS.setVisible(false);
	$("#infoMapylayerfuhrerdurchlublinWGS").css("display", "none"); 	
	
	var querylayerfuhrerdurchlublinWGS = document.querySelector('#layerfuhrerdurchlublinWGS');
	querylayerfuhrerdurchlublinWGS.addEventListener('change', function() {
		
	if(liczniklayerfuhrerdurchlublinWGS % 2 == 0 ){
		$("#infoMapylayerfuhrerdurchlublinWGS").css("display", "block"); 		
		$("#labellayerfuhrerdurchlublinWGS").css("color", "#004020");
		liczniklayerfuhrerdurchlublinWGS++;
	}else{
	$("#infoMapylayerfuhrerdurchlublinWGS").css("display", "none"); 		
	$("#labellayerfuhrerdurchlublinWGS").css("color", "rgba(40, 40, 40, 1)");
		liczniklayerfuhrerdurchlublinWGS++;
	}
	  var checked = this.checked;
	  if (checked !== layerfuhrerdurchlublinWGS.getVisible()) {
		layerfuhrerdurchlublinWGS.setVisible(checked);
	  }
	});

	layerfuhrerdurchlublinWGS.on('change:visible', function() {
	  var visible = this.getVisible();
	  if (visible !== querylayerfuhrerdurchlublinWGS.checked) {
		querylayerfuhrerdurchlublinWGS.checked = visible;
	  }
	}); 
	
	//layerPL3522PmL2510	
	var liczniklayerPL3522PmL2510 = 0;
	layerPL3522PmL2510.setVisible(false);
	$("#infoMapylayerPL3522PmL2510").css("display", "none"); 		
	
	var querylayerPL3522PmL2510 = document.querySelector('#layerPL3522PmL2510');
	querylayerPL3522PmL2510.addEventListener('change', function() {
		
	if(liczniklayerPL3522PmL2510 % 2 == 0 ){
		$("#infoMapylayerPL3522PmL2510").css("display", "block"); 		
		$("#labellayerPL3522PmL2510").css("color", "#004020");
		liczniklayerPL3522PmL2510++;
	}else{
	$("#infoMapylayerPL3522PmL2510").css("display", "none"); 		
	$("#labellayerPL3522PmL2510").css("color", "rgba(40, 40, 40, 1)");
		liczniklayerPL3522PmL2510++;
	}
	  var checked = this.checked;
	  if (checked !== layerPL3522PmL2510.getVisible()) {
		layerPL3522PmL2510.setVisible(checked);
	  }
	});

	layerPL3522PmL2510.on('change:visible', function() {
	  var visible = this.getVisible();
	  if (visible !== querylayerPL3522PmL2510.checked) {
		querylayerPL3522PmL2510.checked = visible;
	  }
	}); 
	
	//layerPL3522PmL2610
	var liczniklayerPL3522PmL2610 = 0;
	layerPL3522PmL2610.setVisible(false);
	$("#infoMapylayerPL3522PmL2610").css("display", "none"); 		
	
	var querylayerPL3522PmL2610 = document.querySelector('#layerPL3522PmL2610');
	querylayerPL3522PmL2610.addEventListener('change', function() {
		
	if(liczniklayerPL3522PmL2610 % 2 == 0 ){
		$("#infoMapylayerPL3522PmL2610").css("display", "block"); 		
		$("#labellayerPL3522PmL2610").css("color", "#004020");
		liczniklayerPL3522PmL2610++;
	}else{
	$("#infoMapylayerPL3522PmL2610").css("display", "none"); 		
	$("#labellayerPL3522PmL2610").css("color", "rgba(40, 40, 40, 1)");
		liczniklayerPL3522PmL2610++;
	}
	  var checked = this.checked;
	  if (checked !== layerPL3522PmL2610.getVisible()) {
		layerPL3522PmL2610.setVisible(checked);
	  }
	});

	layerPL3522PmL2610.on('change:visible', function() {
	  var visible = this.getVisible();
	  if (visible !== querylayerPL3522PmL2610.checked) {
		querylayerPL3522PmL2610.checked = visible;
	  }
	}); 
	
	//koniec interaktywnosci checkboxow
	
	//SWIPE
	   var swipe = document.getElementById('swipe');
	   var sliderValue = swipe.value;
		//Koniec SWIPE 

		 

	
	var viewmenu1 = 0;
	var viewmenu2 = 0;
	var viewmenu3 = 0;
	$("#searching").css("visibility", "hidden");
	$("#menuMenu").css("visibility", "hidden");
	$("#swipeDiv").css("visibility", "hidden");	

	$("#home").click(function(){
			//map.getView().fit(dd, map.getSize());
			//map.getView().setZoom(8);
			
		/*view.animate({
          center: lbn,
          duration: 2000
        });*/
		
		//view.animate({center: lublinCenter, zoom: map.getView() + 8, duration: 2000});
		view.getAnimating({center: lublinCenter, zoom: 14, duration: 1000000,
          easing: elastic});
	});
	
	tonerlite.setVisible(false);
	watercolor.setVisible(false);
	terrain.setVisible(false);
	
	$('input[type=checkbox]').on('change', function () {
		  var layer = {
			osm: osm,
			tonerlite: tonerlite,
			watercolor: watercolor,
			terrain: terrain
			
		  }[$(this).attr('id')];
		  layer.setVisible(!layer.getVisible());

});


	var licznikCarto=0;
	$("#carto").click(function(){
		if(licznikCarto % 2 == 0 ){
			graticule.setMap(map); 
			licznikCarto++;
		}else{
			graticule.setMap(null); 
			licznikCarto++;
		}
	
	});
	 

	$("#search").click(function(){
	
		if(viewmenu1 % 2 == 0 ){
	 
			$("#searching").css("visibility", "visible");
			$("#menuMenu").css("visibility", "hidden");
			
			viewmenu1++;
		}else{

			$("#searching").css("visibility", "hidden");	
			//$("#menuMenu").css("visibility", "hidden");			

			
			viewmenu1++;
		}
	
	});

	$("#menu").click(function(){
	
		if(viewmenu2 % 2 == 0 ){
			$("#menuMenu").css("visibility", "visible");
			$("#searching").css("visibility", "hidden");	
			viewmenu2++;
		}else{
			//$("#searching").css("visibility", "hidden");	
			$("#menuMenu").css("visibility", "hidden");	
		

			viewmenu2++;
		}
	
	});
	


	
		$("#swipeNav").click(function(){
			
			var ctx;
			var width;
			//var swipeValue = swipe.value;
			
			

	
		if(viewmenu1 % 2 == 0 ){
	 
			$("#swipeDiv").css("visibility", "visible");
			$("#menuMenu").css("visibility", "hidden");
			$("#searching").css("visibility", "hidden");
			
			viewmenu1++;
			

				
			//layer26308KARTLublin ------ Swipe
			layer26308KARTLublin.on('precompose', function(event) {
				ctx = event.context;
				width = ctx.canvas.width * (swipe.value / 100);
				ctx.save();
				ctx.beginPath();
				ctx.rect(width, 0, ctx.canvas.width - width, ctx.canvas.height);
				ctx.clip();
							
			  });

			 layer26308KARTLublin.on('postcompose', function(event) {
				ctx.restore();
			  });
			  
			  			  
			  
			 //layerPlanMLublina1918 ------ Swipe
			  layerPlanMLublina1918.on('precompose', function(event) {
				ctx = event.context;
				width = ctx.canvas.width * (swipe.value / 100);
				ctx.save();
				ctx.beginPath();
				ctx.rect(width, 0, ctx.canvas.width - width, ctx.canvas.height);
				ctx.clip();	

			  });

			 layerPlanMLublina1918.on('postcompose', function(event) {
				ctx.restore();
			  });
			  
			  
			  //layerPlanLublina1930 ------ Swipe
			 layerPlanLublina1930.on('precompose', function(event) {
				ctx = event.context;
				width = ctx.canvas.width * (swipe.value / 100);
				ctx.save();
				ctx.beginPath();
				ctx.rect(width, 0, ctx.canvas.width - width, ctx.canvas.height);
				ctx.clip();	

			  });

			layerPlanLublina1930.on('postcompose', function(event) {
				ctx.restore();
			  });
			  

			  
			  //layerPlanLublina1931 ------ Swipe
			 layerPlanLublina1931.on('precompose', function(event) {
				ctx = event.context;
				width = ctx.canvas.width * (swipe.value / 100);
				ctx.save();
				ctx.beginPath();
				ctx.rect(width, 0, ctx.canvas.width - width, ctx.canvas.height);
				ctx.clip();	

			  });

			layerPlanLublina1931.on('postcompose', function(event) {
				ctx.restore();
			  });
			  
			  
			  //layerLublin15K1932 ------ Swipe
			 layerLublin15K1932.on('precompose', function(event) {
				ctx = event.context;
				width = ctx.canvas.width * (swipe.value / 100);
				ctx.save();
				ctx.beginPath();
				ctx.rect(width, 0, ctx.canvas.width - width, ctx.canvas.height);
				ctx.clip();	

			  });

			layerLublin15K1932.on('postcompose', function(event) {
				ctx.restore();
			  });
			  
			  
			  //layerPlanWielkiegoMiastaLublina1935 ------ Swipe
			 layerPlanWielkiegoMiastaLublina1935.on('precompose', function(event) {
				ctx = event.context;
				width = ctx.canvas.width * (swipe.value / 100);
				ctx.save();
				ctx.beginPath();
				ctx.rect(width, 0, ctx.canvas.width - width, ctx.canvas.height);
				ctx.clip();	

			  });

			layerPlanWielkiegoMiastaLublina1935.on('postcompose', function(event) {
				ctx.restore();
			  });
			  
			  
			  //layerVerkehrsplan15K1939 ------ Swipe
			 layerVerkehrsplan15K1939.on('precompose', function(event) {
				ctx = event.context;
				width = ctx.canvas.width * (swipe.value / 100);
				ctx.save();
				ctx.beginPath();
				ctx.rect(width, 0, ctx.canvas.width - width, ctx.canvas.height);
				ctx.clip();	

			  });

			layerVerkehrsplan15K1939.on('postcompose', function(event) {
				ctx.restore();
			  });
			  
			  
			 //layerLublin15K1943 ------ Swipe
			 layerLublin15K1943.on('precompose', function(event) {
				ctx = event.context;
				width = ctx.canvas.width * (swipe.value / 100);
				ctx.save();
				ctx.beginPath();
				ctx.rect(width, 0, ctx.canvas.width - width, ctx.canvas.height);
				ctx.clip();	

			  });

			layerLublin15K1943.on('postcompose', function(event) {
				ctx.restore();
			  });
			  
			  
			 //layerGSGS4435LUBLIN25K1943 ------ Swipe
			 layerGSGS4435LUBLIN25K1943.on('precompose', function(event) {
				ctx = event.context;
				width = ctx.canvas.width * (swipe.value / 100);
				ctx.save();
				ctx.beginPath();
				ctx.rect(width, 0, ctx.canvas.width - width, ctx.canvas.height);
				ctx.clip();	

			  });

			layerGSGS4435LUBLIN25K1943.on('postcompose', function(event) {
				ctx.restore();
			  });
			  
			  
			 //layerM3434ALYUBLIN1941 ------ Swipe
			 layerM3434ALYUBLIN1941.on('precompose', function(event) {
				ctx = event.context;
				width = ctx.canvas.width * (swipe.value / 100);
				ctx.save();
				ctx.beginPath();
				ctx.rect(width, 0, ctx.canvas.width - width, ctx.canvas.height);
				ctx.clip();	

			  });

			layerM3434ALYUBLIN1941.on('postcompose', function(event) {
				ctx.restore();
			  });
			  
			  
			 //layerPlanGorodaLublina ------ Swipe
			 layerPlanGorodaLublina.on('precompose', function(event) {
				ctx = event.context;
				width = ctx.canvas.width * (swipe.value / 100);
				ctx.save();
				ctx.beginPath();
				ctx.rect(width, 0, ctx.canvas.width - width, ctx.canvas.height);
				ctx.clip();	

			  });

			layerPlanGorodaLublina.on('postcompose', function(event) {
				ctx.restore();
			  });
			  
			  
			  
			 //layerLublinNawierzchnia1939 ------ Swipe
			 layerLublinNawierzchnia1939.on('precompose', function(event) {
				ctx = event.context;
				width = ctx.canvas.width * (swipe.value / 100);
				ctx.save();
				ctx.beginPath();
				ctx.rect(width, 0, ctx.canvas.width - width, ctx.canvas.height);
				ctx.clip();	

			  });

			layerLublinNawierzchnia1939.on('postcompose', function(event) {
				ctx.restore();
			  });
			  
			  
			 //layer26312KARTLublin ------ Swipe
			 layer26312KARTLublin.on('precompose', function(event) {
				ctx = event.context;
				width = ctx.canvas.width * (swipe.value / 100);
				ctx.save();
				ctx.beginPath();
				ctx.rect(width, 0, ctx.canvas.width - width, ctx.canvas.height);
				ctx.clip();	

			  });

			layer26312KARTLublin.on('postcompose', function(event) {
				ctx.restore();
			  });
			  
			  
			 //layer26309KARTLublin ------ Swipe
			 layer26309KARTLublin.on('precompose', function(event) {
				ctx = event.context;
				width = ctx.canvas.width * (swipe.value / 100);
				ctx.save();
				ctx.beginPath();
				ctx.rect(width, 0, ctx.canvas.width - width, ctx.canvas.height);
				ctx.clip();	

			  });

			layer26309KARTLublin.on('postcompose', function(event) {
				ctx.restore();
			  });
			  
			  
			 //layer26319KARTLublin ------ Swipe
			 layer26319KARTLublin.on('precompose', function(event) {
				ctx = event.context;
				width = ctx.canvas.width * (swipe.value / 100);
				ctx.save();
				ctx.beginPath();
				ctx.rect(width, 0, ctx.canvas.width - width, ctx.canvas.height);
				ctx.clip();	

			  });

			layer26319KARTLublin.on('postcompose', function(event) {
				ctx.restore();
			  });
			  
			  
			 //layer26315KARTLublin ------ Swipe
			 layer26315KARTLublin.on('precompose', function(event) {
				ctx = event.context;
				width = ctx.canvas.width * (swipe.value / 100);
				ctx.save();
				ctx.beginPath();
				ctx.rect(width, 0, ctx.canvas.width - width, ctx.canvas.height);
				ctx.clip();	

			  });

			layer26315KARTLublin.on('postcompose', function(event) {
				ctx.restore();
			  });
			  
			  
			  //layerFauxbourgs ------ Swipe
			 layerFauxbourgs.on('precompose', function(event) {
				ctx = event.context;
				width = ctx.canvas.width * (swipe.value / 100);
				ctx.save();
				ctx.beginPath();
				ctx.rect(width, 0, ctx.canvas.width - width, ctx.canvas.height);
				ctx.clip();	

			  });

			layerFauxbourgs.on('postcompose', function(event) {
				ctx.restore();
			  });
			  
			  
			 //layer26310KARTLjublin ------ Swipe
			 layer26310KARTLjublin.on('precompose', function(event) {
				ctx = event.context;
				width = ctx.canvas.width * (swipe.value / 100);
				ctx.save();
				ctx.beginPath();
				ctx.rect(width, 0, ctx.canvas.width - width, ctx.canvas.height);
				ctx.clip();	

			  });

			layer26310KARTLjublin.on('postcompose', function(event) {
				ctx.restore();
			  });
			  
			  
			 //layerWa51_1912_WGS ------ Swipe
			 layerWa51_1912_WGS.on('precompose', function(event) {
				ctx = event.context;
				width = ctx.canvas.width * (swipe.value / 100);
				ctx.save();
				ctx.beginPath();
				ctx.rect(width, 0, ctx.canvas.width - width, ctx.canvas.height);
				ctx.clip();	

			  });

			layerWa51_1912_WGS.on('postcompose', function(event) {
				ctx.restore();
			  });
			  
			  
			 //layerWa51_1919_WGS ------ Swipe
			 layerWa51_1919_WGS.on('precompose', function(event) {
				ctx = event.context;
				width = ctx.canvas.width * (swipe.value / 100);
				ctx.save();
				ctx.beginPath();
				ctx.rect(width, 0, ctx.canvas.width - width, ctx.canvas.height);
				ctx.clip();	

			  });

			layerWa51_1919_WGS.on('postcompose', function(event) {
				ctx.restore();
			  });
			  
			  
			 //layerWa51_1935_WGS ------ Swipe
			 layerWa51_1935_WGS.on('precompose', function(event) {
				ctx = event.context;
				width = ctx.canvas.width * (swipe.value / 100);
				ctx.save();
				ctx.beginPath();
				ctx.rect(width, 0, ctx.canvas.width - width, ctx.canvas.height);
				ctx.clip();	

			  });

			layerWa51_1935_WGS.on('postcompose', function(event) {
				ctx.restore();
			  });
			  
			  
			 //layerPL3522PmL210 ------ Swipe
			 layerPL3522PmL210.on('precompose', function(event) {
				ctx = event.context;
				width = ctx.canvas.width * (swipe.value / 100);
				ctx.save();
				ctx.beginPath();
				ctx.rect(width, 0, ctx.canvas.width - width, ctx.canvas.height);
				ctx.clip();	

			  });

			layerPL3522PmL210.on('postcompose', function(event) {
				ctx.restore();
			  });
			  
			  
			 //layerPL3522PmL610 ------ Swipe
			 layerPL3522PmL610.on('precompose', function(event) {
				ctx = event.context;
				width = ctx.canvas.width * (swipe.value / 100);
				ctx.save();
				ctx.beginPath();
				ctx.rect(width, 0, ctx.canvas.width - width, ctx.canvas.height);
				ctx.clip();	

			  });

			layerPL3522PmL610.on('postcompose', function(event) {
				ctx.restore();
			  });
			  
			  
			 //layerPL3522PmL31810  ------ Swipe
			 layerPL3522PmL31810 .on('precompose', function(event) {
				ctx = event.context;
				width = ctx.canvas.width * (swipe.value / 100);
				ctx.save();
				ctx.beginPath();
				ctx.rect(width, 0, ctx.canvas.width - width, ctx.canvas.height);
				ctx.clip();	

			  });

			layerPL3522PmL31810 .on('postcompose', function(event) {
				ctx.restore();
			  });
			  
			  
			 //layerPL3522PmL3101 ------ Swipe
			 layerPL3522PmL3101.on('precompose', function(event) {
				ctx = event.context;
				width = ctx.canvas.width * (swipe.value / 100);
				ctx.save();
				ctx.beginPath();
				ctx.rect(width, 0, ctx.canvas.width - width, ctx.canvas.height);
				ctx.clip();	

			  });

			layerPL3522PmL3101.on('postcompose', function(event) {
				ctx.restore();
			  });
			  
			  
			 //layerPL3522PmL31710 ------ Swipe
			 layerPL3522PmL31710.on('precompose', function(event) {
				ctx = event.context;
				width = ctx.canvas.width * (swipe.value / 100);
				ctx.save();
				ctx.beginPath();
				ctx.rect(width, 0, ctx.canvas.width - width, ctx.canvas.height);
				ctx.clip();	

			  });

			layerPL3522PmL31710.on('postcompose', function(event) {
				ctx.restore();
			  });
			  
			  
			 //layerPL3522PmL510 ------ Swipe
			 layerPL3522PmL510.on('precompose', function(event) {
				ctx = event.context;
				width = ctx.canvas.width * (swipe.value / 100);
				ctx.save();
				ctx.beginPath();
				ctx.rect(width, 0, ctx.canvas.width - width, ctx.canvas.height);
				ctx.clip();	

			  });

			layerPL3522PmL510.on('postcompose', function(event) {
				ctx.restore();
			  });
			  
			  
			 //layerPL3522PmL810  ------ Swipe
			 layerPL3522PmL810 .on('precompose', function(event) {
				ctx = event.context;
				width = ctx.canvas.width * (swipe.value / 100);
				ctx.save();
				ctx.beginPath();
				ctx.rect(width, 0, ctx.canvas.width - width, ctx.canvas.height);
				ctx.clip();	

			  });

			layerPL3522PmL810 .on('postcompose', function(event) {
				ctx.restore();
			  });
			  
			  
			 //layerPL3522PmL32310 ------ Swipe
			 layerPL3522PmL32310.on('precompose', function(event) {
				ctx = event.context;
				width = ctx.canvas.width * (swipe.value / 100);
				ctx.save();
				ctx.beginPath();
				ctx.rect(width, 0, ctx.canvas.width - width, ctx.canvas.height);
				ctx.clip();	

			  });

			layerPL3522PmL32310.on('postcompose', function(event) {
				ctx.restore();
			  });
			  
			  
			 //layerPL3522PmL30910 ------ Swipe
			 layerPL3522PmL30910.on('precompose', function(event) {
				ctx = event.context;
				width = ctx.canvas.width * (swipe.value / 100);
				ctx.save();
				ctx.beginPath();
				ctx.rect(width, 0, ctx.canvas.width - width, ctx.canvas.height);
				ctx.clip();	

			  });

			layerPL3522PmL30910.on('postcompose', function(event) {
				ctx.restore();
			  });
			  
			  
			 //layerPL3522PmL1210 ------ Swipe
			 layerPL3522PmL1210.on('precompose', function(event) {
				ctx = event.context;
				width = ctx.canvas.width * (swipe.value / 100);
				ctx.save();
				ctx.beginPath();
				ctx.rect(width, 0, ctx.canvas.width - width, ctx.canvas.height);
				ctx.clip();	

			  });

			layerPL3522PmL1210.on('postcompose', function(event) {
				ctx.restore();
			  });
			  
			  
			 //layerPL3522PmL1410 ------ Swipe
			 layerPL3522PmL1410.on('precompose', function(event) {
				ctx = event.context;
				width = ctx.canvas.width * (swipe.value / 100);
				ctx.save();
				ctx.beginPath();
				ctx.rect(width, 0, ctx.canvas.width - width, ctx.canvas.height);
				ctx.clip();	

			  });

			layerPL3522PmL1410.on('postcompose', function(event) {
				ctx.restore();
			  });
			  
			  
			 //layerPL3522PmL15101024x1285 ------ Swipe
			 layerPL3522PmL15101024x1285.on('precompose', function(event) {
				ctx = event.context;
				width = ctx.canvas.width * (swipe.value / 100);
				ctx.save();
				ctx.beginPath();
				ctx.rect(width, 0, ctx.canvas.width - width, ctx.canvas.height);
				ctx.clip();	

			  });

			layerPL3522PmL15101024x1285.on('postcompose', function(event) {
				ctx.restore();
			  });
			  
			  
			 //layerPL3522PmL2010 ------ Swipe
			 layerPL3522PmL2010.on('precompose', function(event) {
				ctx = event.context;
				width = ctx.canvas.width * (swipe.value / 100);
				ctx.save();
				ctx.beginPath();
				ctx.rect(width, 0, ctx.canvas.width - width, ctx.canvas.height);
				ctx.clip();	

			  });

			layerPL3522PmL2010.on('postcompose', function(event) {
				ctx.restore();
			  });
			  
			  
			  //layerPL3522PmL1810 ------ Swipe
			 layerPL3522PmL1810.on('precompose', function(event) {
				ctx = event.context;
				width = ctx.canvas.width * (swipe.value / 100);
				ctx.save();
				ctx.beginPath();
				ctx.rect(width, 0, ctx.canvas.width - width, ctx.canvas.height);
				ctx.clip();	

			  });

			layerPL3522PmL1810.on('postcompose', function(event) {
				ctx.restore();
			  });
			  
			  
			 //layerPL3522PmL2410 ------ Swipe
			 layerPL3522PmL2410.on('precompose', function(event) {
				ctx = event.context;
				width = ctx.canvas.width * (swipe.value / 100);
				ctx.save();
				ctx.beginPath();
				ctx.rect(width, 0, ctx.canvas.width - width, ctx.canvas.height);
				ctx.clip();	

			  });

			layerPL3522PmL2410.on('postcompose', function(event) {
				ctx.restore();
			  });
			  
			  
			 //layerPL3522PmL110 ------ Swipe
			 layerPL3522PmL110.on('precompose', function(event) {
				ctx = event.context;
				width = ctx.canvas.width * (swipe.value / 100);
				ctx.save();
				ctx.beginPath();
				ctx.rect(width, 0, ctx.canvas.width - width, ctx.canvas.height);
				ctx.clip();	

			  });

			layerPL3522PmL110.on('postcompose', function(event) {
				ctx.restore();
			  });
			  
			  
			 //layerfuhrerdurchlublinWGS ------ Swipe
			 layerfuhrerdurchlublinWGS.on('precompose', function(event) {
				ctx = event.context;
				width = ctx.canvas.width * (swipe.value / 100);
				ctx.save();
				ctx.beginPath();
				ctx.rect(width, 0, ctx.canvas.width - width, ctx.canvas.height);
				ctx.clip();	

			  });

			layerfuhrerdurchlublinWGS.on('postcompose', function(event) {
				ctx.restore();
			  });
			  
			  
			 //layerPL3522PmL2510 ------ Swipe
			 layerPL3522PmL2510.on('precompose', function(event) {
				ctx = event.context;
				width = ctx.canvas.width * (swipe.value / 100);
				ctx.save();
				ctx.beginPath();
				ctx.rect(width, 0, ctx.canvas.width - width, ctx.canvas.height);
				ctx.clip();	

			  });

			layerPL3522PmL2510.on('postcompose', function(event) {
				ctx.restore();
			  });
			  
			  
			  //layerPL3522PmL2610 ------ Swipe
			 layerPL3522PmL2610.on('precompose', function(event) {
				ctx = event.context;
				width = ctx.canvas.width * (swipe.value / 100);
				ctx.save();
				ctx.beginPath();
				ctx.rect(width, 0, ctx.canvas.width - width, ctx.canvas.height);
				ctx.clip();	

			  });

			layerPL3522PmL2610.on('postcompose', function(event) {
				ctx.restore();
			  });
			  
			  
			  //end swipe
			  

			  

			
			
		}else{
			sliderValue = 100;

			$("#swipeDiv").css("visibility", "hidden");	
			//$("#menuMenu").css("visibility", "hidden");			

			
			viewmenu1++;
		}
		
		
			swipe.addEventListener('input', function() {
				map.render();
			 }, false);
	
	});
 }

$(funkcjeStartowe);
