


class Xotaker extends KendaniEak{
    constructor(x, y) {
        super(x,y);
        this.energy = 5;
        this.index = 2;
    }
    yntrelVandak(ch) {
        this.stanalNorKordinatner();
        return super.yntrelVandak(ch);
    }
    utel() {
        if (this.energy > 10) {
            this.bazmanal();
        }
        if (8 * xotakerArr.length > grassArr.length) {
            this.energy -= 2;
        }
        var vandak1 = random(this.yntrelVandak(1));

        if (vandak1) {
            matrix[this.y][this.x] = 0;
            this.x = vandak1[0]
            this.y = vandak1[1]
            matrix[this.y][this.x] = 2;
            this.energy++;
            for (var i in grassArr) {
                if (grassArr[i].x == this.x && grassArr[i].y == this.y) {
                    grassArr.splice(i, 1);
                    break;
                }
            }

        }
        else {
            this.sharjvel();
        }

    }
    sharjvel() {


        var vandak0 = random(this.yntrelVandak(0));

        if (vandak0) {
            matrix[this.y][this.x] = 0;
            this.x = vandak0[0]
            this.y = vandak0[1]
            matrix[this.y][this.x] = 2;
            this.energy--;
            if (this.energy <= 0 && xotakerArr.length>1) {
                this.mahanal();
            }
        }
    }
     mahanal() {
        matrix[this.y][this.x] = 0;
        for (var i in xotakerArr) {
            if (xotakerArr[i].x == this.x && xotakerArr[i].y == this.y) {
                xotakerArr.splice(i, 1);
                break;
            }
        }
     }
    bazmanal() {
        this.energy = 8;
        this.stanalNorKordinatner();
        var dir = random(this.yntrelVandak(0));
        if (dir) {
            var norXotaker = new Xotaker(dir[0], dir[1]);
            xotakerArr.push(norXotaker);
            matrix[dir[1]][dir[0]] = 2;
        }
        else {
            var dir = random(this.yntrelVandak(1));
            if (dir) {
                for (var i in grassArr) {
                    if (grassArr[i].x == dir[0] && grassArr[i].y == dir[1]) {
                        grassArr.splice(i, 1);
                        break;
                    }
                }
                var norXotaker = new Xotaker(dir[0], dir[1]);
                xotakerArr.push(norXotaker);
                matrix[dir[1]][dir[0]] = 2;
            }
        }
    }

}
