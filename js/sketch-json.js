var sketch = {
  "metadata": {
    "width": 996,
    "height": 636,
    "wsp-version": "4.8.0",
    "wsp-build-number": "1070",
    "wsp-build-stamp": "8126303e6615/20200924134425",
    "exporter-version": "6.00A3007(dev)",
    "exporter-build": "3007(dev)",
    "original-document-name": "L02 Explorer Adding Integers.gsp",
    "start-page": "1",
    "authorPreferences": {
      "stylewidget": "none",
      "tracewidget": "none",
      "labelwidget": "none",
      "visibilitywidget": "none",
      "deletewidget": "none",
      "resetbutton": "none",
      "uploadutil": false,
      "downloadutil": false,
      "disablescrolling": false,
      "removeinaccessibleobjects": false
    }
  },
  "resources": {
    "fontList": [
      "\"Papyrus\", sans-serif",
      "\"Comic Sans MS\", sans-serif"
    ]
  },
  "pages": [
    {
      "metadata": {
        "title": "1",
        "id": "1",
        "sketchRect": {
          "top": -60,
          "left": -35,
          "bottom": 576,
          "right": 961
        }
      },
      "preferences": {
        "units": {
          "length": "cm",
          "angle": "deg"
        },
        "precision": {
          "length": 2,
          "angle": 2,
          "scalar": 2
        },
        "colorableComponents": {
          "Points": {
            "color": "rgb(0,0,252)"
          },
          "Straights": {
            "color": "rgb(0,126,0)"
          },
          "Curves": {
            "color": "black"
          },
          "Interior": {
            "color": "yellow"
          },
          "Plot": {
            "color": "rgb(0,125,0)"
          },
          "PointLocus": {
            "color": "rgb(121,0,0)"
          },
          "Selection": {
            "color": "rgb(188,0,188)"
          },
          "Background": {
            "color": "rgb(248,248,248)"
          },
          "ActionButton": {
            "color": "rgb(160,160,160)"
          },
          "Axis": {
            "color": "rgb(179,179,179)"
          }
        },
        "text": {
          "mathItalicization": true,
          "textTypes": {
            "Label": {
              "font-family": "\"Comic Sans MS\", sans-serif",
              "font-size": 20,
              "font-weight": "normal"
            },
            "Caption": {
              "font-family": "\"Papyrus\", sans-serif",
              "font-size": 22,
              "font-weight": "bold",
              "text-decoration": "underline",
              "color": "fuchsia"
            },
            "Measurement": {
              "font-family": "\"Papyrus\", sans-serif",
              "font-size": 24,
              "font-weight": "bold"
            },
            "Action": {
              "label": {
                "font-family": "\"Comic Sans MS\", sans-serif",
                "font-size": 12
              }
            },
            "Table": {
              "font-family": "\"Comic Sans MS\", sans-serif",
              "font-size": 16
            },
            "AxisTicksAndOptionalLabel": {
              "font-family": "\"Comic Sans MS\", sans-serif",
              "font-size": 28
            }
          }
        }
      },
      "objects": {
        "1": {
          "kind": "Expression",
          "genus": "ScalarParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 27,
              "y": 241
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "6",
          "label": "first integer",
          "style": {
            "font-size": 18,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true
          }
        },
        "2": {
          "kind": "Expression",
          "genus": "ScalarParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 199,
              "y": 241
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "4",
          "label": "second integer",
          "style": {
            "font-size": 18,
            "precision": 0,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true
          }
        },
        "3": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "1",
            "1": "2"
          },
          "geom": {
            "loc": {
              "x": 1194,
              "y": 135
            }
          },
          "latentVisibility": true,
          "label": "New Integers",
          "style": {
            "hidden": true,
            "color": "rgb(255,128,0)",
            "label": {
              "font-size": 10
            }
          },
          "constraint": "ActionButtonAnimate",
          "messages": [
            "New Integers"
          ],
          "animationStates": [
            {
              "rate": 1,
              "timeInterval": 1,
              "repeat": false,
              "motionType": "random",
              "lowerParamBound": -10.5,
              "upperParamBound": 10.5,
              "discrete": false
            },
            {
              "rate": 1,
              "timeInterval": 1,
              "repeat": false,
              "motionType": "random",
              "lowerParamBound": -10,
              "upperParamBound": 10,
              "discrete": false
            }
          ]
        },
        "4": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "1"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 791,
              "y": 95
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "round(@0)",
          "latentVisibility": true,
          "label": "m[1]",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "precision": 0,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "5": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "2"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 966,
              "y": 93
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "round(@0)",
          "latentVisibility": true,
          "label": "m[2]",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "precision": 0,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "6": {
          "kind": "Expression",
          "genus": "DistanceParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 1154,
              "y": 74
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "0.8 cm",
          "latentVisibility": true,
          "label": "rad tile",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "precision": 2,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true
          }
        },
        "7": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "4"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 791,
              "y": 113
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1+sgn(-.5+sgn(@0)))/2",
          "latentVisibility": true,
          "label": "1st integer >0",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "8": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "5"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 966,
              "y": 111
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1+sgn(-.5+sgn(@0)))/2",
          "latentVisibility": true,
          "label": "2nd integer >0",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "9": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "7"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 791,
              "y": 130
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*255",
          "latentVisibility": true,
          "label": "1st int red",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "precision": 2,
            "nameOrigin": "namedFromLabel"
          }
        },
        "10": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {},
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 791,
              "y": 147
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "0*0",
          "latentVisibility": true,
          "label": "1st int green",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "precision": 2,
            "nameOrigin": "namedFromLabel"
          }
        },
        "11": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "7"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 791,
              "y": 164
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1-@0)*255",
          "latentVisibility": true,
          "label": "1st int blue",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "precision": 2,
            "nameOrigin": "namedFromLabel"
          }
        },
        "12": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "8"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 966,
              "y": 129
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*255",
          "latentVisibility": true,
          "label": "2nd int red",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "precision": 2,
            "nameOrigin": "namedFromLabel"
          }
        },
        "13": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {},
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 966,
              "y": 146
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "0*0",
          "latentVisibility": true,
          "label": "2nd int green",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "precision": 2,
            "nameOrigin": "namedFromLabel"
          }
        },
        "14": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "8"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 966,
              "y": 163
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1-@0)*255",
          "latentVisibility": true,
          "label": "2nd int blue",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "precision": 2,
            "nameOrigin": "namedFromLabel"
          }
        },
        "15": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "4"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 791,
              "y": 181
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1-abs(sgn(@0))",
          "latentVisibility": true,
          "label": "m[1]=0",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "16": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "5"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 972,
              "y": 184
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1-abs(sgn(@0))",
          "latentVisibility": true,
          "label": "m[2]=0",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "17": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "4"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": -6,
              "y": 81
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0",
          "label": "1",
          "style": {
            "font-weight": "normal",
            "precision": 0,
            "nameOrigin": "noVisibleName"
          }
        },
        "18": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "5"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": -5,
              "y": 148
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0",
          "label": "f",
          "style": {
            "font-weight": "normal",
            "precision": 0,
            "nameOrigin": "noVisibleName"
          }
        },
        "19": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "15",
            "1": "6"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 791,
              "y": 204
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1-@0)*@1",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "20": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "16",
            "1": "6"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 972,
              "y": 207
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1-@0)*@1",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "21": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "4"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 791,
              "y": 227
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "abs(@0)",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "22": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "5"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 972,
              "y": 230
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "abs(@0)",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "23": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "21"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 791,
              "y": 249
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0-1",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "24": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "22"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 972,
              "y": 252
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0-1",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "25": {
          "kind": "Expression",
          "genus": "DistanceParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 791,
              "y": 271
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1.9 cm",
          "latentVisibility": true,
          "label": "spacing",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "precision": 2,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true
          }
        },
        "26": {
          "kind": "Expression",
          "genus": "DistanceParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 972,
              "y": 274
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1.9 cm",
          "latentVisibility": true,
          "label": "spacing",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "precision": 2,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true
          }
        },
        "27": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 63,
              "y": 58
            }
          },
          "style": {
            "hidden": true
          }
        },
        "28": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 63,
              "y": 424
            }
          },
          "style": {
            "hidden": true
          }
        },
        "29": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "27",
            "p1": "28"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "30": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "29"
          },
          "value": 0.28415300546448086,
          "constraint": "PointOnPath",
          "label": "B",
          "style": {
            "hidden": true
          }
        },
        "31": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "30",
            "distance": "26"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true
          }
        },
        "32": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "30",
            "radius": "20"
          },
          "constraint": "CircleByRadius"
        },
        "33": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "circle": "32"
          },
          "constraint": "CircleInterior",
          "style": {
            "hidden": true,
            "color": "rgb(255,128,0)",
            "layerOrder": 6
          }
        },
        "34": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "source": "33",
            "blue": "14",
            "green": "13",
            "red": "12"
          },
          "colorRange": "ReflectToRange",
          "colorModel": "TrivariateRGB",
          "parameterDomainFrom": 0,
          "parameterDomainTo": 1,
          "constraint": "ColorizeTrivariate",
          "style": {
            "color": "red",
            "layerOrder": 7
          }
        },
        "35": {
          "kind": "Map",
          "genus": "IterateMap",
          "parents": {
            "0": "32",
            "1": "33",
            "2": "34",
            "3": "31",
            "preimage0": "30",
            "map0image0": "31",
            "depth": "24"
          },
          "constraint": "IterateMapByParametricDepth",
          "rerandomizePointsOnPaths": false,
          "finalIterationOnly": false
        },
        "36": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "34",
            "map": "35"
          },
          "constraint": "IterateImage",
          "style": {
            "opacity": 0.49999237060546875,
            "layerOrder": 12
          }
        },
        "37": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "32",
            "map": "35"
          },
          "constraint": "IterateImage",
          "style": {
            "line-style": "solid",
            "width": 3
          }
        },
        "38": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "29"
          },
          "value": 0.14207650273224043,
          "constraint": "PointOnPath",
          "label": "A",
          "style": {
            "hidden": true
          }
        },
        "39": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "38",
            "distance": "25"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true
          }
        },
        "40": {
          "kind": "Circle",
          "genus": "Circle",
          "parents": {
            "p0": "38",
            "radius": "19"
          },
          "constraint": "CircleByRadius"
        },
        "41": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "circle": "40"
          },
          "constraint": "CircleInterior",
          "style": {
            "hidden": true,
            "color": "black",
            "layerOrder": 8
          }
        },
        "42": {
          "kind": "CircleInterior",
          "genus": "CircleInt",
          "parents": {
            "source": "41",
            "blue": "11",
            "green": "10",
            "red": "9"
          },
          "colorRange": "ReflectToRange",
          "colorModel": "TrivariateRGB",
          "parameterDomainFrom": 0,
          "parameterDomainTo": 1,
          "constraint": "ColorizeTrivariate",
          "style": {
            "color": "red",
            "layerOrder": 9
          }
        },
        "43": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": -5,
              "y": 111
            }
          },
          "textMFS": "<T'+'>",
          "style": {
            "font-size": 24,
            "font-weight": "normal",
            "text-decoration": "none",
            "color": "black"
          }
        },
        "44": {
          "kind": "Map",
          "genus": "IterateMap",
          "parents": {
            "0": "39",
            "1": "40",
            "2": "41",
            "3": "42",
            "preimage0": "38",
            "map0image0": "39",
            "depth": "23"
          },
          "constraint": "IterateMapByParametricDepth",
          "rerandomizePointsOnPaths": false,
          "finalIterationOnly": false
        },
        "45": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "40",
            "map": "44"
          },
          "constraint": "IterateImage",
          "style": {
            "line-style": "solid",
            "width": 3
          }
        },
        "46": {
          "kind": "IterateImage",
          "genus": "IterateImage",
          "parents": {
            "source": "42",
            "map": "44"
          },
          "constraint": "IterateImage",
          "style": {
            "opacity": 0.49999237060546875,
            "layerOrder": 13
          }
        },
        "47": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "7"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 791,
              "y": 295
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1-@0",
          "latentVisibility": true,
          "label": "m[3]",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "48": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "8"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 972,
              "y": 298
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1-@0",
          "latentVisibility": true,
          "label": "m[3]",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "49": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "7",
            "1": "8"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 792,
              "y": 356
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "abs(sgn(@0*@1))",
          "latentVisibility": true,
          "label": "both +ve",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "50": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "47",
            "1": "48"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 792,
              "y": 373
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "abs(sgn(@0*@1))",
          "latentVisibility": true,
          "label": "both -ve",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "51": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "49",
            "1": "50"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 792,
              "y": 390
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "sgn(abs(sgn(@0))+abs(sgn(@1)))",
          "latentVisibility": true,
          "label": "same sign",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "52": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "51"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 792,
              "y": 407
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1-@0",
          "latentVisibility": true,
          "label": "m[5]",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "53": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "4"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 792,
              "y": 424
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "abs(@0)",
          "latentVisibility": true,
          "label": "m[4]",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "54": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "5"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 792,
              "y": 445
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "abs(@0)",
          "latentVisibility": true,
          "label": "m[4]",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "55": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "53",
            "1": "54"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 520,
              "y": 390
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1-sgn(.5+sgn(@0-@1)))/2",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "precision": 0,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "56": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "55"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 520,
              "y": 390
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1-@0",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "precision": 0,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "57": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "55",
            "1": "53",
            "2": "56",
            "3": "54"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 792,
              "y": 466
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*@1+@2*@3",
          "latentVisibility": true,
          "label": "min (m[4], m[4])",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "precision": 2,
            "nameOrigin": "namedFromLabel"
          }
        },
        "58": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "52",
            "1": "57"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 792,
              "y": 488
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*@1",
          "latentVisibility": true,
          "label": "# zeros",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "59": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "58",
            "1": "25"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 792,
              "y": 505
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*@1",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "60": {
          "kind": "Expression",
          "genus": "DistanceMeasure",
          "parents": {
            "0": "25",
            "1": "6",
            "2": "19"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 792,
              "y": 546
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(@0-2*@1)/2+@2",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "61": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "38",
            "distance": "60"
          },
          "angle": 3.1415926535897865,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true
          }
        },
        "62": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "30",
            "distance": "60"
          },
          "angle": 3.1415926535897865,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true
          }
        },
        "63": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 792,
              "y": 323
            }
          },
          "textMFS": "<VL<T'determine # of zeros'><T'draw the yellow shade ot cover zeros'>>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "text-decoration": "none",
            "color": "rgb(255,128,0)"
          }
        },
        "64": {
          "kind": "Expression",
          "genus": "DistanceParameter",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 792,
              "y": 522
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "0.8 cm",
          "latentVisibility": true,
          "label": "vert shift",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "precision": 1,
            "nameOrigin": "namedFromLabel",
            "contenteditable": true
          }
        },
        "65": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "62",
            "distance": "64"
          },
          "angle": 1.5707963267948861,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true
          }
        },
        "66": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "65",
            "distance": "59"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true
          }
        },
        "67": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "61",
            "distance": "64"
          },
          "angle": -1.5707963267949,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true
          }
        },
        "68": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "67",
            "distance": "59"
          },
          "angle": 0,
          "constraint": "TranslateMeasureDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true
          }
        },
        "69": {
          "kind": "Polygon",
          "genus": "Quadrilateral",
          "parents": {
            "0": "68",
            "1": "66",
            "2": "65",
            "3": "67"
          },
          "constraint": "PolygonFromPoints",
          "style": {
            "layerOrder": 14
          }
        },
        "70": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 791,
              "y": 24
            }
          },
          "textMFS": "<VL<T'generate first integer'><T'set up RGB colouring'><T'calculations for iteration'>>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "text-decoration": "none",
            "color": "rgb(255,128,0)"
          }
        },
        "71": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 966,
              "y": 22
            }
          },
          "textMFS": "<VL<T'generate first integer'><T'set up RGB colouring'><T'calculations for iteration'>>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "text-decoration": "none",
            "color": "rgb(255,128,0)"
          }
        },
        "72": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "4",
            "1": "5"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1008,
              "y": 334
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0+@1",
          "latentVisibility": true,
          "label": "m[6]",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "precision": 0,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "73": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "0": "4",
            "1": "5",
            "2": "72"
          },
          "constraint": "CompositeText",
          "geom": {
            "loc": {
              "x": 411,
              "y": 239
            }
          },
          "textMFS": "<H<?1xC0001<H<T'6'>>><T' + ('><?1xC0002<H<T'4'>>><T') = '><?1xC0003<H<T'10'>>>>",
          "style": {
            "font-size": 24,
            "text-decoration": "none",
            "color": "black"
          }
        },
        "74": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 11,
              "y": -39
            }
          },
          "textMFS": "<T'Adding Two Integers Explorer'>",
          "style": {
            "color": "black"
          }
        },
        "75": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 21,
              "y": 335
            }
          },
          "textMFS": "<VL<T'Let\\'s explore what happens when you add two integers using counters. '><S#E<T' '>><T'Enter integers into both boxes above or use \\\"+\\\" and \\\"-\\\" to change the values.'>>",
          "style": {
            "font-weight": "normal",
            "text-decoration": "none",
            "color": "black"
          }
        },
        "76": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "55",
            "1": "54",
            "2": "56",
            "3": "53"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 936,
              "y": 471
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0*@1+@2*@3",
          "latentVisibility": true,
          "label": "max (m[4], m[4])",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "precision": 2,
            "nameOrigin": "namedFromLabel"
          }
        },
        "77": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "76",
            "1": "58"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 936,
              "y": 493
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "@0-@1",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "precision": 0,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "78": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "0": "1",
            "1": "2",
            "2": "58",
            "3": "77"
          },
          "constraint": "CompositeText",
          "geom": {
            "loc": {
              "x": 815,
              "y": 600
            }
          },
          "textMFS": "<VL<H<T'The sum of '><?1xC0001<H<T'6'>>><T' and '><?1xC0002<H<T'4'>>><T' will generate '><?1xC0003<H<T'0'>>><T' zero pairs leaving '><?1xC0004<H<T'6'>>><T' more '><SR1G1L100<T'blue '>><T'counters.'>>>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "text-decoration": "none",
            "color": "black"
          }
        },
        "79": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "72"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1168,
              "y": 408
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1+sgn(-.5+sgn(@0)))/2",
          "latentVisibility": true,
          "label": "m[6]>0",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "80": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "72"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1168,
              "y": 431
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "(1-sgn(.5+sgn(@0)))/2",
          "latentVisibility": true,
          "label": "m[6]<0",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "81": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "72"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1168,
              "y": 454
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1-abs(sgn(@0))",
          "latentVisibility": true,
          "label": "m[6]=0",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "82": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "0": "1",
            "1": "2",
            "2": "58",
            "3": "77"
          },
          "constraint": "CompositeText",
          "geom": {
            "loc": {
              "x": 815,
              "y": 620
            }
          },
          "textMFS": "<VL<H<T'The sum of '><?1xC0001<H<T'6'>>><T' and '><?1xC0002<H<T'4'>>><T' will generate '><?1xC0003<H<T'0'>>><T' zero pairs leaving '><?1xC0004<H<T'6'>>><T' more '><SR100G1L1<T'red '>><T'counters.'>>>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "text-decoration": "none",
            "color": "black"
          }
        },
        "83": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "0": "1",
            "1": "2",
            "2": "58"
          },
          "constraint": "CompositeText",
          "geom": {
            "loc": {
              "x": 815,
              "y": 640
            }
          },
          "textMFS": "<VL<H<T'The sum of '><?1xC0001<H<T'6'>>><T' and '><?1xC0002<H<T'4'>>><T' will generate '><?1xC0003<H<T'0'>>><T' zero pairs leaving no unpaired counters.'>>>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "text-decoration": "none",
            "color": "black"
          }
        },
        "84": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "80"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 375,
              "y": 605
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1/@0*2",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "85": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 390,
              "y": 628
            }
          },
          "style": {
            "hidden": true
          }
        },
        "86": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "85"
          },
          "angle": -1.5707963267949,
          "distance": 14.173228346456693,
          "constraint": "TranslateFixDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "87": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "86",
            "center": "85",
            "measure": "84"
          },
          "constraint": "DilateMeasureFactor",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "88": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "79"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 375,
              "y": 605
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1/@0*2",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "89": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "86",
            "center": "85",
            "measure": "88"
          },
          "constraint": "DilateMeasureFactor",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "90": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "81"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 375,
              "y": 605
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1/@0*2",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "91": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "86",
            "center": "85",
            "measure": "90"
          },
          "constraint": "DilateMeasureFactor",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "92": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "72"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1008,
              "y": 352
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "abs(@0)",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "precision": 0,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "93": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "0": "1",
            "1": "2",
            "2": "92"
          },
          "constraint": "CompositeText",
          "geom": {
            "loc": {
              "x": 815,
              "y": 659
            }
          },
          "textMFS": "<VL<H<T'The sum of '><?1xC0001<H<T'6'>>><T' and '><?1xC0002<H<T'4'>>><T' does not generate zero pairs so there are a total of '><?1xC0003<H<T'10'>>><T' '><SR100G1L1<T'red '>><T'counters.'>>>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "text-decoration": "none",
            "color": "black"
          }
        },
        "94": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "0": "1",
            "1": "2",
            "2": "92"
          },
          "constraint": "CompositeText",
          "geom": {
            "loc": {
              "x": 815,
              "y": 679
            }
          },
          "textMFS": "<VL<H<T'The sum of '><?1xC0001<H<T'6'>>><T' and '><?1xC0002<H<T'4'>>><T' does not generate zero pairs so there are a total of '><?1xC0003<H<T'10'>>><T' '><SR1G1L100<T'blue '>><T'counters.'>>>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "text-decoration": "none",
            "color": "black"
          }
        },
        "95": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "49"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1131,
              "y": 526
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1/@0*2",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "96": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "50"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1131,
              "y": 526
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1/@0*2",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "97": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "49"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1019,
              "y": 394
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1-@0",
          "latentVisibility": true,
          "label": "m[7]",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "98": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "50"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1019,
              "y": 411
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1-@0",
          "latentVisibility": true,
          "label": "m[7]",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "99": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "97",
            "1": "79"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1128,
              "y": 497
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "abs(sgn(@0*@1))",
          "latentVisibility": true,
          "label": "(m[7])^(m[6]>0)",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "100": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "98",
            "1": "80"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1128,
              "y": 519
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "abs(sgn(@0*@1))",
          "latentVisibility": true,
          "label": "(m[7])^(m[6]<0)",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "precision": 0,
            "nameOrigin": "namedFromLabel"
          }
        },
        "101": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "99"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1146,
              "y": 538
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1/@0*2",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "102": {
          "kind": "Expression",
          "genus": "ScalarMeasure",
          "parents": {
            "0": "100"
          },
          "constraint": "Calculation",
          "geom": {
            "loc": {
              "x": 1146,
              "y": 538
            }
          },
          "expressionType": "UniMeasure_ExprType",
          "expression": "1/@0*2",
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "precision": 2,
            "nameOrigin": "namedFromTemplate"
          }
        },
        "103": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 24,
              "y": 64
            }
          },
          "style": {
            "hidden": true
          }
        },
        "104": {
          "kind": "Point",
          "genus": "Point",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 663,
              "y": 64
            }
          },
          "style": {
            "hidden": true
          }
        },
        "105": {
          "kind": "Straight",
          "genus": "Segment",
          "parents": {
            "p0": "103",
            "p1": "104"
          },
          "constraint": "Segment",
          "style": {
            "hidden": true,
            "width": 1
          }
        },
        "106": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 1223,
              "y": 500
            }
          },
          "textMFS": "<VL<T'diff signs and greater than 0'>>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "text-decoration": "none",
            "color": "rgb(255,128,0)"
          }
        },
        "107": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 1223,
              "y": 519
            }
          },
          "textMFS": "<VL<T'diff signs and less than 0'>>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "text-decoration": "none",
            "color": "rgb(255,128,0)"
          }
        },
        "108": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 1226,
              "y": 405
            }
          },
          "textMFS": "<VL<T'sum +ve'>>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "text-decoration": "none",
            "color": "rgb(255,128,0)"
          }
        },
        "109": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 1220,
              "y": 428
            }
          },
          "textMFS": "<VL<T'sum -ve'>>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "text-decoration": "none",
            "color": "rgb(255,128,0)"
          }
        },
        "110": {
          "kind": "Text",
          "genus": "Caption",
          "constraint": "Free",
          "geom": {
            "loc": {
              "x": 1228,
              "y": 453
            }
          },
          "textMFS": "<VL<T'sum 0'>>",
          "latentVisibility": true,
          "style": {
            "hidden": true,
            "font-family": 1,
            "font-size": 10,
            "font-weight": "normal",
            "text-decoration": "none",
            "color": "rgb(255,128,0)"
          }
        },
        "111": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "105"
          },
          "value": 0.5555555555555556,
          "constraint": "PointOnPath",
          "style": {
            "hidden": true
          }
        },
        "112": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "111"
          },
          "angle": -1.5707963267949,
          "distance": 14.173228346456693,
          "constraint": "TranslateFixDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "113": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "112",
            "center": "111",
            "measure": "102"
          },
          "constraint": "DilateMeasureFactor",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "114": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "p0": "113",
            "text": "78"
          },
          "constraint": "Pegged",
          "style": {
            "font-weight": "normal",
            "text-decoration": "none",
            "color": "black"
          }
        },
        "115": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "105"
          },
          "value": 0.539906103286385,
          "constraint": "PointOnPath",
          "style": {
            "hidden": true
          }
        },
        "116": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "115"
          },
          "angle": -1.5707963267949,
          "distance": 14.173228346456693,
          "constraint": "TranslateFixDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "117": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "116",
            "center": "115",
            "measure": "101"
          },
          "constraint": "DilateMeasureFactor",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "118": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "p0": "117",
            "text": "82"
          },
          "constraint": "Pegged",
          "style": {
            "font-weight": "normal",
            "text-decoration": "none",
            "color": "black"
          }
        },
        "119": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "105"
          },
          "value": 0.5524256651017214,
          "constraint": "PointOnPath",
          "style": {
            "hidden": true
          }
        },
        "120": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "119"
          },
          "angle": -1.5707963267949,
          "distance": 14.173228346456693,
          "constraint": "TranslateFixDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "121": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "120",
            "center": "119",
            "measure": "90"
          },
          "constraint": "DilateMeasureFactor",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "122": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "p0": "121",
            "text": "83"
          },
          "constraint": "Pegged",
          "style": {
            "font-weight": "normal",
            "text-decoration": "none",
            "color": "black"
          }
        },
        "123": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "105"
          },
          "value": 0.6338028169014085,
          "constraint": "PointOnPath",
          "style": {
            "hidden": true
          }
        },
        "124": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "123"
          },
          "angle": -1.5707963267949,
          "distance": 14.173228346456693,
          "constraint": "TranslateFixDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "125": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "124",
            "center": "123",
            "measure": "95"
          },
          "constraint": "DilateMeasureFactor",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "126": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "p0": "125",
            "text": "93"
          },
          "constraint": "Pegged",
          "style": {
            "font-weight": "normal",
            "text-decoration": "none",
            "color": "black"
          }
        },
        "127": {
          "kind": "Point",
          "genus": "PointOnPath",
          "parents": {
            "path": "105"
          },
          "value": 0.6604068857589984,
          "constraint": "PointOnPath",
          "style": {
            "hidden": true
          }
        },
        "128": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "127"
          },
          "angle": -1.5707963267949,
          "distance": 14.173228346456693,
          "constraint": "TranslateFixDistFixAngle",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "129": {
          "kind": "Point",
          "genus": "Point",
          "parents": {
            "source": "128",
            "center": "127",
            "measure": "96"
          },
          "constraint": "DilateMeasureFactor",
          "shouldAutogenerateLabel": true,
          "style": {
            "hidden": true,
            "color": "red",
            "radius": 2
          }
        },
        "130": {
          "kind": "Text",
          "genus": "CompositeText",
          "parents": {
            "p0": "129",
            "text": "94"
          },
          "constraint": "Pegged",
          "style": {
            "font-weight": "normal",
            "text-decoration": "none",
            "color": "black"
          }
        },
        "131": {
          "kind": "Button",
          "genus": "Action",
          "parents": {
            "0": "3",
            "1": "4",
            "2": "5",
            "3": "6",
            "4": "7",
            "5": "8",
            "6": "9",
            "7": "10",
            "8": "11",
            "9": "12",
            "10": "13",
            "11": "14",
            "12": "15",
            "13": "16",
            "14": "19",
            "15": "20",
            "16": "21",
            "17": "22",
            "18": "23",
            "19": "24",
            "20": "25",
            "21": "26",
            "22": "47",
            "23": "48",
            "24": "49",
            "25": "50",
            "26": "51",
            "27": "52",
            "28": "53",
            "29": "54",
            "30": "57",
            "31": "58",
            "32": "59",
            "33": "60",
            "34": "63",
            "35": "64",
            "36": "70",
            "37": "71",
            "38": "72",
            "39": "76",
            "40": "77",
            "41": "78",
            "42": "79",
            "43": "80",
            "44": "81",
            "45": "82",
            "46": "83",
            "47": "92",
            "48": "93",
            "49": "94",
            "50": "97",
            "51": "98",
            "52": "99",
            "53": "100",
            "54": "106",
            "55": "107",
            "56": "108",
            "57": "109",
            "58": "110"
          },
          "geom": {
            "loc": {
              "x": 1229,
              "y": 5
            }
          },
          "label": "Show Objects",
          "style": {
            "color": "rgb(255,128,0)",
            "label": {
              "font-size": 10
            }
          },
          "constraint": "ActionButtonToggleHideShow",
          "messages": [
            "Hide Objects",
            "Show Objects"
          ],
          "shouldAutogenerateLabel": true
        }
      }
    }
  ]
};