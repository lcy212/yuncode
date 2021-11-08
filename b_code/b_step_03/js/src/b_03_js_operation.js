// b_03_operation.js

// 사칙연산 ----------------------------------------------------------------------
var n = 10;
var nFn = function(data){
    return console.log( n, data );
};
nFn();

var plus = n + 10;
nFn(plus);

var minus = n - 5;
nFn(minus);

var divide = parseInt(n / 3);
nFn(divide);

var multi = n * 6;
nFn(multi);

var remainder = n % 3;
nFn(remainder);


// 할당/복합대입연산 -----------------------------------------------------------
var nReset = n = n + 10;
nFn(nReset);

n = n + 20;   // n = 40
n = n + 100;  // n = 140
nFn();

n += 60;     // n = n + 60;   n = 200
nFn();

n -= 10;     // n = n - 10;   n = 190
nFn();

n *= 2;     // n = n * 2;   n = 380
nFn();

n /= 9;     // n = n / 9;   n = 42.222222
nFn();

n = parseInt(n);
n %= 5;
nFn();


// 증감연산 ----------------------------------------------------------------------
console.clear()
nFn();

n += 1;
nFn();

n++;    // 변수 n의 값을 도출 후 연산한다
nFn();

++n;    // 연산 후 변수 n의 값을 도출한다
nFn();

n = n + 1;
n += 1;
n++;
++n;
nFn('---------------------');

n = n - 1;
n -= 1;
n--;
--n;

var i =20;

// 비교연산 ----------------------------------------------------------------------
n = 20;
nFn( n, i);

var compare = n === i; // ==은 사용하지않기
nFn(n, i);
console.log ( compare );

compare = n !== i;
nFn(n, i);
console.log ( compare );

compare = n <= i;
nFn(n, i);
console.log ( compare );

compare = n >= i;
nFn(n, i);
console.log ( compare );


// or (||), and (%%) -----------------------
// 한쪽이 조건을 충족을 하면 다른쪽은 보지않고 결과 도출함
// ||은 true 나오기 쉬운 내용, &&은 false 나오기 쉬운 내용을 좌변에 배치(우선이 되는 내용도)
var compare2 = true || true;  // true
console.log( compare2 );

compare2 = true || false;     // true
console.log( compare2 );

compare2 = false || false;    // false
console.log( compare2 );

compare2 = true && true;      // true
console.log( compare2 );

compare2 = false && false;    // false
console.log( compare2 );


// or (|), and (&) ---------------------
// 0과 1로 결과 도출 (실무에서 많이 안쓰는편)
var compare3 = true | true;
console.log( compare3 );

compare3 = true | false;
console.log( compare3 );

compare3 = true & true;
console.log( compare3 );

compare3 = true & false;
console.log( compare3 );


// 부정/반대 (!) -------------------------
console.log('체크1', true)
console.log('체크1', !true)
console.log('체크1', !!true)
console.log('체크2', 1)
console.log('체크2', !1)
console.log('체크2', !!1)

// 비교연산자 활용사례 -------------
var checkFn = function(data){
    var d = data || 'not Data';
    return console.log( d );
};
checkFn(10);
checkFn();

// 삼항연산 ----------------------------------------------------------------------
// 참 거짓 수행 내용은 1줄로 작성해야함
// (1) ? 2 : 3 ;
// (조건) ? 참 : 거짓 ;

(!true) ? console.log('참') : console.log('거짓');

// 백팩을 들고다닌다면-------------------------
var list = [];
var trueFn = function(){
    list = ['note', 'laptop', 'mouse', 'git'];
    return list;
};
var falseFn = function(){
    list = ['wallet', 'glasses', 'smartphone'];
    return list;
}

(!true)? trueFn(): falseFn();
console.log( list );


// 어떤 개발자 ----------------------------------
console.clear();

var tech = [];
var front = function(){
    tech = ['html', 'css', 'javascript', 'jQuary', 'node.js', 'react', 'typescript'];
    return tech;
};
var back = function(){
    tech = ['html', 'sql', 'c#', '.net', 'pythone', 'java', 'jsp', 'spring', 'javascript', 'node.js'];
    return tech;
};
// (true)? front(): back();
// console.log( tech );

// var program = 'back';
// ( program === 'front' )? front(): back();
// console.log( tech );

var programer = function(field){
    var data = field === 'front';
    var data2 = field === 'back';

    (data)?
    front():
    (data2)? back(): tech = [];
};


programer('front');
console.log( tech );
programer('back');
console.log( tech );
programer('design');
console.log( tech );