//KONVA SETUP
let stage = new Konva.Stage({ height: 550, width: 900, container: 'konva-holder', x: -20 });
let layer = new Konva.Layer();
stage.add(layer);

let group1 = new Konva.Group({ x: 00, y: 10 }).moveTo(layer);
group1.draggable(true);

let group2 = new Konva.Group({ x: 00, y: 25 }).moveTo(layer);
group2.draggable(true);

let group3 = new Konva.Group({ x: 00, y: 40 }).moveTo(layer);
group3.draggable(true);

let group4 = new Konva.Group({ x: 00, y: 55 }).moveTo(layer);
group4.draggable(true);

let group5 = new Konva.Group({ x: 00, y: 70 }).moveTo(layer);
group5.draggable(true);

let group6 = new Konva.Group({ x: 00, y: 85 }).moveTo(layer);
group6.draggable(true);

//VARIABLES
let x_axis = 850;
let y_axis = 400;
let downloadNo = 236;
let padding = 0;
let score = 0

//KONVA FUNCTIONS

function hit(id_name) {

    score = score + 1;
    //RESET VALUES
    if (x_axis == 130 && (y_axis == 400)) {
    y_axis = y_axis - 75;
    x_axis = x_axis + 720;
    }
    else if (x_axis == -50 && (y_axis == 325 || y_axis == 250 || y_axis == 175 || y_axis == 100 || y_axis == 25)) {
    y_axis = y_axis - 75;
    x_axis = x_axis + 720;
    }

    //MOVE 3 MEDALS GRP FOR 4TH MEDAL
    if (x_axis == 130 && y_axis == 325) {
    group2.x(180);
    }
    else if (x_axis == 130 && y_axis == 250) {
    group3.x(180);
    }
    else if (x_axis == 130 && y_axis == 175) {
    group4.x(180);
    }
    else if (x_axis == 130 && y_axis == 100) {
    group5.x(180);
    }
    else if (x_axis == 130 && y_axis == 25) {
    group6.x(180);
    }

    //ALIGN IF 3 MEDALS ON TOP
    if (x_axis == 310 && y_axis == 325) {
    group2.x(90);
    }
    else if (x_axis == 310 && y_axis == 250) {
    group3.x(90);
    }
    else if (x_axis == 310 && y_axis == 175) {
    group4.x(90);
    }
    else if (x_axis == 310 && y_axis == 100) {
    group5.x(90);
    }
    else if (x_axis == 310 && y_axis == 25) {
    group6.x(90);
    }

    //GET LOCATION USING ID
    var location = document.getElementById(`${id_name}`).getAttribute("src")
    var value_id = document.getElementById(`${id_name}`).getAttribute("value")
    console.log(value_id)

    //ADD IMAGES BASED ON GROUPS
    if (y_axis == 400) {
    var id_name = Konva.Image.fromURL(`${location}`, function (img) {
        group1.add(img), img.x(x_axis), img.y(y_axis), img.height(60), img.width(180), layer.batchDraw();
    });
    }
    else if (y_axis == 325) {
    var id_name = Konva.Image.fromURL(`${location}`, function (img) {
        group2.add(img), img.x(x_axis), img.y(y_axis), img.height(60), img.width(180), layer.batchDraw();
    });
    }
    else if (y_axis == 250) {
    var id_name = Konva.Image.fromURL(`${location}`, function (img) {
        group3.add(img), img.x(x_axis), img.y(y_axis), img.height(60), img.width(180), layer.batchDraw();
    });
    }
    else if (y_axis == 175) {
    var id_name = Konva.Image.fromURL(`${location}`, function (img) {
        group4.add(img), img.x(x_axis), img.y(y_axis), img.height(60), img.width(180), layer.batchDraw();
    });
    }
    else if (y_axis == 100) {
    var id_name = Konva.Image.fromURL(`${location}`, function (img) {
        group5.add(img), img.x(x_axis), img.y(y_axis), img.height(60), img.width(180), layer.batchDraw();
    });
    }
    else if (y_axis == 25) {
    var id_name = Konva.Image.fromURL(`${location}`, function (img) {
        group6.add(img), img.x(x_axis), img.y(y_axis), img.height(60), img.width(180), layer.batchDraw();
    });
    }

    x_axis = x_axis - 180;

    //TO GET 2 MEDALS ON TOP
    if ((y_axis == 325 || y_axis == 250 || y_axis == 175 || y_axis == 100 || y_axis == 25 || y_axis == -50) && x_axis == 670) {
    x_axis = x_axis - 180;
    }

    //ALERT TRIAL
    if (score == 5) {
    group1.getChildren().at(3).y(340).x(580);
    group1.x(-90);
    group2.x(-180);
    }
    else if (score == 9) {
    group2.getChildren().at(3).y(265).x(400);
    group2.x(90);
    group3.x(-180);
    }
    else if (score == 13) {
    group3.getChildren().at(3).y(190).x(400);
    group3.x(90);
    group4.x(-180);
    }
    else if (score == 17) {
    group4.getChildren().at(3).y(115).x(400);
    group4.x(90);
    group5.x(-180);
    }
    else if (score == 21) {
    group5.getChildren().at(3).y(40).x(400);
    group5.x(90);
    group6.x(-180);
    }

    //GET BACK ON TRACK
    else if (y_axis == 325 && x_axis == 310 && score == 6) {
    group1.getChildren().at(3).y(400).x(130);
    group1.x(00);
    group2.x(00);
    }
    else if (y_axis == 250 && x_axis == 310 && score == 10) {
    group2.x(180);
    group2.getChildren().at(3).y(325).x(-50);
    group3.x(00);
    }
    else if (y_axis == 175 && x_axis == 310 && score == 14) {
    group3.x(180);
    group3.getChildren().at(3).y(250).x(-50);
    group4.x(00);
    }
    else if (y_axis == 100 && x_axis == 310 && score == 18) {
    group4.x(180);
    group4.getChildren().at(3).y(175).x(-50);
    group5.x(00);
    }
    else if (y_axis == 25 && x_axis == 310 && score == 22) {
    group5.x(180);
    group5.getChildren().at(3).y(100).x(-50);
    group6.x(00);
    }
};

layer.draw();

//DOWNLOAD
function downloadURI(uri, name) {
    var link = document.createElement('a');
    link.download = name;
    link.href = uri;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    delete link;
}
function save_img() {
    var dataURL = stage.toDataURL({ pixelRatio: 3 });
    downloadURI(dataURL, 'indianarmymedal3049.png');
}
