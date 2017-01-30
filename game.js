var isStart; //判断滑动是否开始
var _Score; //记分牌对象
var _BlockBackground; //滑块背景

$(function() {
    _Score = new Score();
    _BlockBackground = new BlockBackground();
});

//滑块框架，用来控制各个滑块
function BlockBackground() {


    this.$_background = $('.background'); //放置滑块的背景     

    this.keys = new Keys(this.blockRows[4]); //按键对象
    this.popup = new Popup(this.init.bind(this)); //弹出窗口对象

    this.init(false);
}

BlockBackground.prototype = {

    //滑块开始运动
    startGame: function() {
        isStart = true;
        this.startMove();
    },
    startMove: function() {
        var self = this;
        this.$_background.animate({ top: 149 }, self.t, "linear", function() { //每次滑块移动一行的距离，并调用回调函数
            self.moveDid();
            $(this).css({ top: 0 });
            if (self.t > 70) { //增加滑块滑动的速度，限制速度最大值
                self.v = self.v + 0.005;
                self.t = 149 / self.v;
            };
        });
    },

    //滑块停止运动，并更改标志位，并且弹出“游戏结束”的窗口
    stopGame: function() {
        this.stopMove();
        this.canMove = false;
        this.popup.toggleShow();
    },
    stopMove: function() {
        this.$_background.stop(true, false).css({ top: 0 }); //返回初始位置
    },

    //调整滑块行
    toggleBlockRow: function(isAdd) {
        if (isAdd) { //增加新的一行
            var blockRow = new BlockRow();
            blockRow.randomBlock();
            this.blockRows.unshift(blockRow);
            this.$_background.prepend(blockRow.$_row);
        } else { //删除旧的一行
            var row_4 = this.blockRows.pop();
            row_4.checkBlock();
            row_4.$_row.remove();
        }
    },

    /**
     * 将最后一行滑块从背景中删除，并在最上方加入新的一行
     */
    moveDid: function() {
        this.toggleBlockRow(false); //取出删除的一行滑块，检查是否满足游戏要求
        this.toggleBlockRow(true);
        this.keys.changeLis(this.blockRows[4]); //更新按键对象所能控制的滑块行对象
        this.canMove && this.startMove(); //是否继续移动
    }
}

//滑块行对象，控制每一行滑块
function BlockRow() {

    //添加鼠标点击监听
    var self = this;
    this.$_lis.each(function() {
        $(this).click(function() {
            self.clickBlock(this, true);
        });
    });
};

BlockRow.prototype = {

    //移除黑色滑块
    removeBlack: function($_li) {
        $_li.removeClass('action');
        _Score.changeNum(true);
    },

    /**
     * 事件响应函数
     * @param li 监听的滑块行
     * @param flag 判断是鼠标事件还是键盘事件，若是鼠标事件，按错判游戏结束，键盘无此判定
     */
    clickBlock: function(li, flag) {
        if (!isStart) { //判断是否开始运动，若未开始，则除了“开始”滑块其余滑块点击无效果
            if ($(li).find('span')[0]) {
                _BlockBackground.startGame();
                this.removeBlack($(li));
            }
        } else {
            li.className ? this.removeBlack($(li)) : (flag && _BlockBackground.stopGame());
        }
    },

    //游戏判定，检查滑块行上是否还有黑色滑块
    checkBlock: function() {
        this.$_lis.each(function() {
            this.className && _BlockBackground.stopGame();
        });
    }
}

/**
 * 按键对象，一次只能判定一行滑块
 * @param blockRow 需要判定的滑块行 
 */
function Keys(blockRow) {
    this.blockRow = blockRow;

    //更改需要判定的滑块行
    this.changeLis = function(blockRow) {
        this.blockRow = blockRow;
    };

    //按键时的判定函数
    this.isBlack = function(x) {
        var li = this.blockRow.$_lis[x];
        blockRow.clickBlock(li, false);
    };

    //给键盘添加事件监听
    document.body.onkeydown = function(e) {
        switch (e.keyCode) {
            case 81:
                this.isBlack(0);
                break;
            case 87:
                this.isBlack(1);
                break;
            case 69:
                this.isBlack(2);
                break;
            case 82:
                this.isBlack(3);
                break;
        }
    }.bind(this);
}

//窗口对象
function Popup(initGame) {
    var self = this;
    this.initGame = initGame;

    this.$_popup = $('.popup');
    this.$_popupContent = $('.popup-content');

    this.$_reStart_1 = $('.reStart_1');
    this.$_reStart_2 = $('.reStart_2');

    this.toggleShow = function() {
        this.$_popup.toggleClass('show');
        this.$_popupContent.toggleClass('show');
    }

    this.$_reStart_1.click(function() {
        self.initGame(true);
    })

    this.$_reStart_2.click(function() {
        self.initGame(false);
        self.toggleShow();
    })
}