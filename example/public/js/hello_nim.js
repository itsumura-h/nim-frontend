/* Generated by the Nim Compiler v1.6.6 */
var framePtr = null;
var excHandler = 0;
var lastJSError = null;
var NTI33555114 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NTI33555125 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NTI33554456 = {size: 0,kind: 31,base: null,node: null,finalizer: null};
var NTI687865928 = {size: 0,kind: 31,base: null,node: null,finalizer: null};
var NTI687865935 = {size: 0, kind: 18, base: null, node: null, finalizer: null};
var NTI33555121 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NTI33555128 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NTI33555130 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NTI33555083 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NTI33555165 = {size: 0, kind: 22, base: null, node: null, finalizer: null};
var NTI33554439 = {size: 0,kind: 28,base: null,node: null,finalizer: null};
var NTI33554440 = {size: 0,kind: 29,base: null,node: null,finalizer: null};
var NTI33555164 = {size: 0, kind: 22, base: null, node: null, finalizer: null};
var NTI33555112 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NTI33555113 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NTI33555120 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NTI33555122 = {size: 0, kind: 17, base: null, node: null, finalizer: null};
var NNI33555122 = {kind: 2, len: 0, offset: 0, typ: null, name: null, sons: []};
NTI33555122.node = NNI33555122;
var NNI33555120 = {kind: 2, len: 0, offset: 0, typ: null, name: null, sons: []};
NTI33555120.node = NNI33555120;
var NNI33555113 = {kind: 2, len: 0, offset: 0, typ: null, name: null, sons: []};
NTI33555113.node = NNI33555113;
NTI33555164.base = NTI33555112;
NTI33555165.base = NTI33555112;
var NNI33555112 = {kind: 2, len: 5, offset: 0, typ: null, name: null, sons: [{kind: 1, offset: "parent", len: 0, typ: NTI33555164, name: "parent", sons: null}, 
{kind: 1, offset: "name", len: 0, typ: NTI33554440, name: "name", sons: null}, 
{kind: 1, offset: "message", len: 0, typ: NTI33554439, name: "msg", sons: null}, 
{kind: 1, offset: "trace", len: 0, typ: NTI33554439, name: "trace", sons: null}, 
{kind: 1, offset: "up", len: 0, typ: NTI33555165, name: "up", sons: null}]};
NTI33555112.node = NNI33555112;
var NNI33555083 = {kind: 2, len: 0, offset: 0, typ: null, name: null, sons: []};
NTI33555083.node = NNI33555083;
NTI33555112.base = NTI33555083;
NTI33555113.base = NTI33555112;
NTI33555120.base = NTI33555113;
NTI33555122.base = NTI33555120;
var NNI33555130 = {kind: 2, len: 0, offset: 0, typ: null, name: null, sons: []};
NTI33555130.node = NNI33555130;
NTI33555130.base = NTI33555113;
var NNI33555128 = {kind: 2, len: 0, offset: 0, typ: null, name: null, sons: []};
NTI33555128.node = NNI33555128;
NTI33555128.base = NTI33555113;
var NNI33555121 = {kind: 2, len: 0, offset: 0, typ: null, name: null, sons: []};
NTI33555121.node = NNI33555121;
NTI33555121.base = NTI33555120;
var NNI687865935 = {kind: 2, len: 2, offset: 0, typ: null, name: null, sons: [{kind: 1, offset: "a", len: 0, typ: NTI687865928, name: "a", sons: null}, 
{kind: 1, offset: "b", len: 0, typ: NTI33554456, name: "b", sons: null}]};
NTI687865935.node = NNI687865935;
var NNI33555125 = {kind: 2, len: 0, offset: 0, typ: null, name: null, sons: []};
NTI33555125.node = NNI33555125;
var NNI33555114 = {kind: 2, len: 0, offset: 0, typ: null, name: null, sons: []};
NTI33555114.node = NNI33555114;
NTI33555114.base = NTI33555112;
NTI33555125.base = NTI33555114;

function makeNimstrLit(c_33556801) {
      var result = [];
  for (var i = 0; i < c_33556801.length; ++i) {
    result[i] = c_33556801.charCodeAt(i);
  }
  return result;
  

  
}

function mnewString(len_33556893) {
        return new Array(len_33556893);
  

  
}

function toJSStr(s_33556807) {
                    var Temporary5;
            var Temporary7;

  var result_33556808 = null;

    var res_33556842 = newSeq_33556825((s_33556807).length);
    var i_33556843 = 0;
    var j_33556844 = 0;
    Label1: do {
        Label2: while (true) {
        if (!(i_33556843 < (s_33556807).length)) break Label2;
          var c_33556845 = s_33556807[i_33556843];
          if ((c_33556845 < 128)) {
          res_33556842[j_33556844] = String.fromCharCode(c_33556845);
          i_33556843 += 1;
          }
          else {
            var helper_33556857 = newSeq_33556825(0);
            Label3: do {
                Label4: while (true) {
                if (!true) break Label4;
                  var code_33556858 = c_33556845.toString(16);
                  if ((((code_33556858) == null ? 0 : (code_33556858).length) == 1)) {
                  helper_33556857.push("%0");;
                  }
                  else {
                  helper_33556857.push("%");;
                  }
                  
                  helper_33556857.push(code_33556858);;
                  i_33556843 += 1;
                    if (((s_33556807).length <= i_33556843)) Temporary5 = true; else {                      Temporary5 = (s_33556807[i_33556843] < 128);                    }                  if (Temporary5) {
                  break Label3;
                  }
                  
                  c_33556845 = s_33556807[i_33556843];
                }
            } while (false);
++excHandler;
            Temporary7 = framePtr;
            try {
            res_33556842[j_33556844] = decodeURIComponent(helper_33556857.join(""));
--excHandler;
} catch (EXCEPTION) {
 var prevJSError = lastJSError;
 lastJSError = EXCEPTION;
 --excHandler;
            framePtr = Temporary7;
            res_33556842[j_33556844] = helper_33556857.join("");
            lastJSError = prevJSError;
            } finally {
            framePtr = Temporary7;
            }
          }
          
          j_33556844 += 1;
        }
    } while (false);
    if (res_33556842.length < j_33556844) { for (var i = res_33556842.length ; i < j_33556844 ; ++i) res_33556842.push(null); }
               else { res_33556842.length = j_33556844; };
    result_33556808 = res_33556842.join("");

  return result_33556808;

}

function raiseException(e_33556667, ename_33556668) {
    e_33556667.name = ename_33556668;
    if ((excHandler == 0)) {
    unhandledException(e_33556667);
    }
    
    throw e_33556667;

  
}

function addInt(a_33556940, b_33556941) {
        var result = a_33556940 + b_33556941;
    checkOverflowInt(result);
    return result;
  

  
}

function setConstr() {
        var result = {};
    for (var i = 0; i < arguments.length; ++i) {
      var x = arguments[i];
      if (typeof(x) == "object") {
        for (var j = x[0]; j <= x[1]; ++j) {
          result[j] = true;
        }
      } else {
        result[x] = true;
      }
    }
    return result;
  

  
}
var ConstSet1 = setConstr(60, 62, 94);

function chckRange(i_33557189, a_33557190, b_33557191) {
      var Temporary1;

  var result_33557192 = 0;

  BeforeRet: do {
      if (!(a_33557190 <= i_33557189)) Temporary1 = false; else {        Temporary1 = (i_33557189 <= b_33557191);      }    if (Temporary1) {
    result_33557192 = i_33557189;
    break BeforeRet;
    }
    else {
    raiseRangeError();
    }
    
  } while (false);

  return result_33557192;

}
var ConstSet2 = setConstr(17, 16, 4, 18, 27, 19, 23, 22, 21);

function nimCopy(dest_33557140, src_33557141, ti_33557142) {
  var result_33557151 = null;

    switch (ti_33557142.kind) {
    case 21:
    case 22:
    case 23:
    case 5:
      if (!(isFatPointer_33557131(ti_33557142))) {
      result_33557151 = src_33557141;
      }
      else {
        result_33557151 = [src_33557141[0], src_33557141[1]];
      }
      
      break;
    case 19:
            if (dest_33557140 === null || dest_33557140 === undefined) {
        dest_33557140 = {};
      }
      else {
        for (var key in dest_33557140) { delete dest_33557140[key]; }
      }
      for (var key in src_33557141) { dest_33557140[key] = src_33557141[key]; }
      result_33557151 = dest_33557140;
    
      break;
    case 18:
    case 17:
      if (!((ti_33557142.base == null))) {
      result_33557151 = nimCopy(dest_33557140, src_33557141, ti_33557142.base);
      }
      else {
      if ((ti_33557142.kind == 17)) {
      result_33557151 = (dest_33557140 === null || dest_33557140 === undefined) ? {m_type: ti_33557142} : dest_33557140;
      }
      else {
        result_33557151 = (dest_33557140 === null || dest_33557140 === undefined) ? {} : dest_33557140;
      }
      }
      nimCopyAux(result_33557151, src_33557141, ti_33557142.node);
      break;
    case 24:
    case 4:
    case 27:
    case 16:
            if (src_33557141 === null) {
        result_33557151 = null;
      }
      else {
        if (dest_33557140 === null || dest_33557140 === undefined || dest_33557140.length != src_33557141.length) {
          dest_33557140 = new Array(src_33557141.length);
        }
        result_33557151 = dest_33557140;
        for (var i = 0; i < src_33557141.length; ++i) {
          result_33557151[i] = nimCopy(result_33557151[i], src_33557141[i], ti_33557142.base);
        }
      }
    
      break;
    case 28:
            if (src_33557141 !== null) {
        result_33557151 = src_33557141.slice(0);
      }
    
      break;
    default: 
      result_33557151 = src_33557141;
      break;
    }

  return result_33557151;

}

function chckIndx(i_33557184, a_33557185, b_33557186) {
      var Temporary1;

  var result_33557187 = 0;

  BeforeRet: do {
      if (!(a_33557185 <= i_33557184)) Temporary1 = false; else {        Temporary1 = (i_33557184 <= b_33557186);      }    if (Temporary1) {
    result_33557187 = i_33557184;
    break BeforeRet;
    }
    else {
    raiseIndexError(i_33557184, a_33557185, b_33557186);
    }
    
  } while (false);

  return result_33557187;

}
var ConstSet3 = setConstr(60, 62, 94);
var ConstSet4 = setConstr(45, 43, 32);
var ConstSet5 = setConstr([48, 57]);
var ConstSet6 = setConstr([48, 57]);
var ConstSet7 = setConstr([48, 57]);

function subInt(a_33556944, b_33556945) {
        var result = a_33556944 - b_33556945;
    checkOverflowInt(result);
    return result;
  

  
}

function divInt(a_33556952, b_33556953) {
        if (b_33556953 == 0) raiseDivByZero();
    if (b_33556953 == -1 && a_33556952 == 2147483647) raiseOverflow();
    return Math.trunc(a_33556952 / b_33556953);
  

  
}

function mulInt(a_33556948, b_33556949) {
        var result = a_33556948 * b_33556949;
    checkOverflowInt(result);
    return result;
  

  
}
var ConstSet8 = setConstr([65, 90], [97, 122]);
if (!Math.trunc) {
  Math.trunc = function(v) {
    v = +v;
    if (!isFinite(v)) return v;
    return (v - v % 1) || (v < 0 ? -0 : v === 0 ? v : 0);
  };
}

var objectID_1090519202 = [0];

function add_33556419(x_33556420, x_33556420_Idx, y_33556421) {
          if (x_33556420[x_33556420_Idx] === null) { x_33556420[x_33556420_Idx] = []; }
      var off = x_33556420[x_33556420_Idx].length;
      x_33556420[x_33556420_Idx].length += y_33556421.length;
      for (var i = 0; i < y_33556421.length; ++i) {
        x_33556420[x_33556420_Idx][off+i] = y_33556421.charCodeAt(i);
      }
    

  
}

function newSeq_33556825(len_33556827) {
  var result_33556828 = [];

    result_33556828 = new Array(len_33556827); for (var i = 0 ; i < len_33556827 ; ++i) { result_33556828[i] = null; }
  return result_33556828;

}

function unhandledException(e_33556663) {
    var buf_33556664 = [[]];
    if (!(((e_33556663.message).length == 0))) {
    buf_33556664[0].push.apply(buf_33556664[0], makeNimstrLit("Error: unhandled exception: "));;
    buf_33556664[0].push.apply(buf_33556664[0], e_33556663.message);;
    }
    else {
    buf_33556664[0].push.apply(buf_33556664[0], makeNimstrLit("Error: unhandled exception"));;
    }
    
    buf_33556664[0].push.apply(buf_33556664[0], makeNimstrLit(" ["));;
    add_33556419(buf_33556664, 0, e_33556663.name);
    buf_33556664[0].push.apply(buf_33556664[0], makeNimstrLit("]\x0A"));;
    var cbuf_33556665 = toJSStr(buf_33556664[0]);
    framePtr = null;
      if (typeof(Error) !== "undefined") {
    throw new Error(cbuf_33556665);
  }
  else {
    throw cbuf_33556665;
  }
  

  
}

function raiseOverflow() {
    raiseException({message: makeNimstrLit("over- or underflow"), parent: null, m_type: NTI33555122, name: null, trace: [], up: null}, "OverflowDefect");

  
}

function checkOverflowInt(a_33556938) {
        if (a_33556938 > 2147483647 || a_33556938 < -2147483648) raiseOverflow();
  

  
}

function raiseRangeError() {
    raiseException({message: makeNimstrLit("value out of range"), parent: null, m_type: NTI33555130, name: null, trace: [], up: null}, "RangeDefect");

  
}

function addChars_251658415(result_251658417, result_251658417_Idx, x_251658418, start_251658419, n_251658420) {
    var old_251658421 = (result_251658417[result_251658417_Idx]).length;
    (result_251658417[result_251658417_Idx].length = chckRange(addInt(old_251658421, n_251658420), 0, 2147483647));
    Label1: do {
      var iHEX60gensym4_251658435 = 0;
      var i_889192467 = 0;
      Label2: do {
          Label3: while (true) {
          if (!(i_889192467 < n_251658420)) break Label3;
            iHEX60gensym4_251658435 = i_889192467;
            result_251658417[result_251658417_Idx][chckIndx(addInt(old_251658421, iHEX60gensym4_251658435), 0, (result_251658417[result_251658417_Idx]).length - 1)] = x_251658418.charCodeAt(chckIndx(addInt(start_251658419, iHEX60gensym4_251658435), 0, (x_251658418).length - 1));
            i_889192467 = addInt(i_889192467, 1);
          }
      } while (false);
    } while (false);

  
}

function addChars_251658411(result_251658413, result_251658413_Idx, x_251658414) {
    addChars_251658415(result_251658413, result_251658413_Idx, x_251658414, 0, ((x_251658414) == null ? 0 : (x_251658414).length));

  
}

function addInt_251658436(result_251658437, result_251658437_Idx, x_251658438) {
    addChars_251658411(result_251658437, result_251658437_Idx, ((x_251658438) + ""));

  
}

function addInt_251658457(result_251658458, result_251658458_Idx, x_251658459) {
    addInt_251658436(result_251658458, result_251658458_Idx, x_251658459);

  
}

function HEX24_335544323(x_335544324) {
  var result_335544325 = [[]];

    addInt_251658457(result_335544325, 0, x_335544324);

  return result_335544325[0];

}

function isFatPointer_33557131(ti_33557132) {
  var result_33557133 = false;

  BeforeRet: do {
    result_33557133 = !((ConstSet2[ti_33557132.base.kind] != undefined));
    break BeforeRet;
  } while (false);

  return result_33557133;

}

function nimCopyAux(dest_33557144, src_33557145, n_33557146) {
    switch (n_33557146.kind) {
    case 0:
      break;
    case 1:
            dest_33557144[n_33557146.offset] = nimCopy(dest_33557144[n_33557146.offset], src_33557145[n_33557146.offset], n_33557146.typ);
    
      break;
    case 2:
          for (var i = 0; i < n_33557146.sons.length; i++) {
      nimCopyAux(dest_33557144, src_33557145, n_33557146.sons[i]);
    }
    
      break;
    case 3:
            dest_33557144[n_33557146.offset] = nimCopy(dest_33557144[n_33557146.offset], src_33557145[n_33557146.offset], n_33557146.typ);
      for (var i = 0; i < n_33557146.sons.length; ++i) {
        nimCopyAux(dest_33557144, src_33557145, n_33557146.sons[i][1]);
      }
    
      break;
    }

  
}

function raiseIndexError(i_33556754, a_33556755, b_33556756) {
    var Temporary1;

    if ((b_33556756 < a_33556755)) {
    Temporary1 = makeNimstrLit("index out of bounds, the container is empty");
    }
    else {
    Temporary1 = (makeNimstrLit("index ") || []).concat(HEX24_335544323(i_33556754) || [],makeNimstrLit(" not in ") || [],HEX24_335544323(a_33556755) || [],makeNimstrLit(" .. ") || [],HEX24_335544323(b_33556756) || []);
    }
    
    raiseException({message: nimCopy(null, Temporary1, NTI33554439), parent: null, m_type: NTI33555128, name: null, trace: [], up: null}, "IndexDefect");

  
}

function raiseDivByZero() {
    raiseException({message: makeNimstrLit("division by zero"), parent: null, m_type: NTI33555121, name: null, trace: [], up: null}, "DivByZeroDefect");

  
}

function parseSaturatedNatural_520094012(s_520094013, b_520094014, b_520094014_Idx, start_520094015) {
      var Temporary1;
          var Temporary4;

  var result_520094016 = 0;

    var i_520094017 = start_520094015;
    if (((i_520094017 < (s_520094013).length) && (s_520094013[chckIndx(i_520094017, 0, (s_520094013).length - 1)] == 43))) {
    i_520094017 = addInt(i_520094017, 1);
    }
    
      if (!(i_520094017 < (s_520094013).length)) Temporary1 = false; else {        Temporary1 = (ConstSet6[s_520094013[chckIndx(i_520094017, 0, (s_520094013).length - 1)]] != undefined);      }    if (Temporary1) {
    b_520094014[b_520094014_Idx] = 0;
    Label2: do {
        Label3: while (true) {
          if (!(i_520094017 < (s_520094013).length)) Temporary4 = false; else {            Temporary4 = (ConstSet7[s_520094013[chckIndx(i_520094017, 0, (s_520094013).length - 1)]] != undefined);          }        if (!Temporary4) break Label3;
          var c_520094036 = subInt(s_520094013[chckIndx(i_520094017, 0, (s_520094013).length - 1)], 48);
          if ((b_520094014[b_520094014_Idx] <= divInt(subInt(2147483647, c_520094036), 10))) {
          b_520094014[b_520094014_Idx] = addInt(mulInt(b_520094014[b_520094014_Idx], 10), c_520094036);
          }
          else {
            b_520094014[b_520094014_Idx] = 2147483647;
          }
          
          i_520094017 = addInt(i_520094017, 1);
          Label5: do {
              Label6: while (true) {
              if (!((i_520094017 < (s_520094013).length) && (s_520094013[chckIndx(i_520094017, 0, (s_520094013).length - 1)] == 95))) break Label6;
                i_520094017 = addInt(i_520094017, 1);
              }
          } while (false);
        }
    } while (false);
    result_520094016 = subInt(i_520094017, start_520094015);
    }
    

  return result_520094016;

}

function HEX5BHEX5D_754977946(s_754977949, x_754977950) {
  var result_754977951 = [];

    var a_754977953 = x_754977950.a;
    var L_754977955 = addInt(subInt(subInt((s_754977949).length, x_754977950.b), a_754977953), 1);
    result_754977951 = nimCopy(null, mnewString(chckRange(L_754977955, 0, 2147483647)), NTI33554439);
    Label1: do {
      var i_754977960 = 0;
      var i_889192472 = 0;
      Label2: do {
          Label3: while (true) {
          if (!(i_889192472 < L_754977955)) break Label3;
            i_754977960 = i_889192472;
            result_754977951[chckIndx(i_754977960, 0, (result_754977951).length - 1)] = s_754977949[chckIndx(addInt(i_754977960, a_754977953), 0, (s_754977949).length - 1)];
            i_889192472 = addInt(i_889192472, 1);
          }
      } while (false);
    } while (false);

  return result_754977951;

}

function HEX2EHEX2E_687865936(a_687865939, b_687865940) {
  var result_687865943 = ({a: 0, b: 0});

    result_687865943 = nimCopy(result_687865943, {a: a_687865939, b: b_687865940}, NTI687865935);

  return result_687865943;

}

function parseStandardFormatSpecifier_1358954554(s_1358954555, start_1358954556, ignoreUnknownSuffix_1358954557) {
      var Temporary1;
      var Temporary2;
      var Temporary3;

  var result_1358954558 = ({fill: 0, align: 0, sign: 0, alternateForm: false, padWithZero: false, minimumWidth: 0, precision: 0, typ: 0, endPosition: 0});

    result_1358954558.fill = 32;
    result_1358954558.align = 0;
    result_1358954558.sign = 45;
    var i_1358954560 = start_1358954556;
    if (((addInt(i_1358954560, 1) < (s_1358954555).length) && (ConstSet1[s_1358954555[chckIndx(addInt(i_1358954560, 1), 0, (s_1358954555).length - 1)]] != undefined))) {
    result_1358954558.fill = s_1358954555[chckIndx(i_1358954560, 0, (s_1358954555).length - 1)];
    result_1358954558.align = s_1358954555[chckIndx(addInt(i_1358954560, 1), 0, (s_1358954555).length - 1)];
    i_1358954560 = addInt(i_1358954560, 2);
    }
    else {
    if (((i_1358954560 < (s_1358954555).length) && (ConstSet3[s_1358954555[chckIndx(i_1358954560, 0, (s_1358954555).length - 1)]] != undefined))) {
    result_1358954558.align = s_1358954555[chckIndx(i_1358954560, 0, (s_1358954555).length - 1)];
    i_1358954560 = addInt(i_1358954560, 1);
    }
    }
    if (((i_1358954560 < (s_1358954555).length) && (ConstSet4[s_1358954555[chckIndx(i_1358954560, 0, (s_1358954555).length - 1)]] != undefined))) {
    result_1358954558.sign = s_1358954555[chckIndx(i_1358954560, 0, (s_1358954555).length - 1)];
    i_1358954560 = addInt(i_1358954560, 1);
    }
    
    if (((i_1358954560 < (s_1358954555).length) && (s_1358954555[chckIndx(i_1358954560, 0, (s_1358954555).length - 1)] == 35))) {
    result_1358954558.alternateForm = true;
    i_1358954560 = addInt(i_1358954560, 1);
    }
    
      if (!((addInt(i_1358954560, 1) < (s_1358954555).length) && (s_1358954555[chckIndx(i_1358954560, 0, (s_1358954555).length - 1)] == 48))) Temporary1 = false; else {        Temporary1 = (ConstSet5[s_1358954555[chckIndx(addInt(i_1358954560, 1), 0, (s_1358954555).length - 1)]] != undefined);      }    if (Temporary1) {
    result_1358954558.padWithZero = true;
    i_1358954560 = addInt(i_1358954560, 1);
    }
    
    var parsedLength_1358954597 = parseSaturatedNatural_520094012(s_1358954555, result_1358954558, "minimumWidth", i_1358954560);
    i_1358954560 = addInt(i_1358954560, parsedLength_1358954597);
    if (((i_1358954560 < (s_1358954555).length) && (s_1358954555[chckIndx(i_1358954560, 0, (s_1358954555).length - 1)] == 46))) {
    i_1358954560 = addInt(i_1358954560, 1);
    var parsedLengthB_1358954606 = parseSaturatedNatural_520094012(s_1358954555, result_1358954558, "precision", i_1358954560);
    i_1358954560 = addInt(i_1358954560, parsedLengthB_1358954606);
    }
    else {
      result_1358954558.precision = -1;
    }
    
      if (!(i_1358954560 < (s_1358954555).length)) Temporary2 = false; else {        Temporary2 = (ConstSet8[s_1358954555[chckIndx(i_1358954560, 0, (s_1358954555).length - 1)]] != undefined);      }    if (Temporary2) {
    result_1358954558.typ = s_1358954555[chckIndx(i_1358954560, 0, (s_1358954555).length - 1)];
    i_1358954560 = addInt(i_1358954560, 1);
    }
    
    result_1358954558.endPosition = i_1358954560;
      if (!!((i_1358954560 == (s_1358954555).length))) Temporary3 = false; else {        Temporary3 = !(ignoreUnknownSuffix_1358954557);      }    if (Temporary3) {
    raiseException({message: (makeNimstrLit("invalid format string, cannot parse: ") || []).concat(HEX5BHEX5D_754977946(s_1358954555, HEX2EHEX2E_687865936(i_1358954560, 1)) || []), parent: null, m_type: NTI33555125, name: null, trace: [], up: null}, "ValueError");
    }
    

  return result_1358954558;

}

function nucruneLen(s_754974730) {
  var result_754974731 = 0;

    result_754974731 = 0;
    var i_754974732 = 0;
    Label1: do {
        Label2: while (true) {
        if (!(i_754974732 < (s_754974730).length)) break Label2;
          if ((s_754974730[chckIndx(i_754974732, 0, (s_754974730).length - 1)] <= 127)) {
          i_754974732 = addInt(i_754974732, 1);
          }
          else {
          if (((s_754974730[chckIndx(i_754974732, 0, (s_754974730).length - 1)] >>> 5) == 6)) {
          i_754974732 = addInt(i_754974732, 2);
          }
          else {
          if (((s_754974730[chckIndx(i_754974732, 0, (s_754974730).length - 1)] >>> 4) == 14)) {
          i_754974732 = addInt(i_754974732, 3);
          }
          else {
          if (((s_754974730[chckIndx(i_754974732, 0, (s_754974730).length - 1)] >>> 3) == 30)) {
          i_754974732 = addInt(i_754974732, 4);
          }
          else {
          if (((s_754974730[chckIndx(i_754974732, 0, (s_754974730).length - 1)] >>> 2) == 62)) {
          i_754974732 = addInt(i_754974732, 5);
          }
          else {
          if (((s_754974730[chckIndx(i_754974732, 0, (s_754974730).length - 1)] >>> 1) == 126)) {
          i_754974732 = addInt(i_754974732, 6);
          }
          else {
          i_754974732 = addInt(i_754974732, 1);
          }
          }}}}}
          result_754974731 = addInt(result_754974731, 1);
        }
    } while (false);

  return result_754974731;

}

function runeLenAt_754974785(s_754974786, i_754974787) {
  var result_754974788 = 0;

    if ((s_754974786[chckIndx(i_754974787, 0, (s_754974786).length - 1)] <= 127)) {
    result_754974788 = 1;
    }
    else {
    if (((s_754974786[chckIndx(i_754974787, 0, (s_754974786).length - 1)] >>> 5) == 6)) {
    result_754974788 = 2;
    }
    else {
    if (((s_754974786[chckIndx(i_754974787, 0, (s_754974786).length - 1)] >>> 4) == 14)) {
    result_754974788 = 3;
    }
    else {
    if (((s_754974786[chckIndx(i_754974787, 0, (s_754974786).length - 1)] >>> 3) == 30)) {
    result_754974788 = 4;
    }
    else {
    if (((s_754974786[chckIndx(i_754974787, 0, (s_754974786).length - 1)] >>> 2) == 62)) {
    result_754974788 = 5;
    }
    else {
    if (((s_754974786[chckIndx(i_754974787, 0, (s_754974786).length - 1)] >>> 1) == 126)) {
    result_754974788 = 6;
    }
    else {
      result_754974788 = 1;
    }
    }}}}}

  return result_754974788;

}

function runeOffset_754975357(s_754975358, pos_754975359, start_754975360) {
  var result_754975361 = 0;

  BeforeRet: do {
    var i_754975362 = 0;
    var o_754975363 = start_754975360;
    Label1: do {
        Label2: while (true) {
        if (!(i_754975362 < pos_754975359)) break Label2;
          o_754975363 = addInt(o_754975363, chckRange(runeLenAt_754974785(s_754975358, o_754975363), 0, 2147483647));
          if (((s_754975358).length <= o_754975363)) {
          result_754975361 = -1;
          break BeforeRet;
          }
          
          i_754975362 = addInt(i_754975362, 1);
        }
    } while (false);
    result_754975361 = o_754975363;
    break BeforeRet;
  } while (false);

  return result_754975361;

}

function validateUtf8_754974997(s_754974998) {
            var Temporary3;
            var Temporary4;
            var Temporary5;
            var Temporary6;
            var Temporary7;
            var Temporary8;

  var result_754974999 = 0;

  BeforeRet: do {
    var i_754975000 = 0;
    var L_754975001 = (s_754974998).length;
    Label1: do {
        Label2: while (true) {
        if (!(i_754975000 < L_754975001)) break Label2;
          if ((s_754974998[chckIndx(i_754975000, 0, (s_754974998).length - 1)] <= 127)) {
          i_754975000 = addInt(i_754975000, 1);
          }
          else {
          if (((s_754974998[chckIndx(i_754975000, 0, (s_754974998).length - 1)] >>> 5) == 6)) {
          if ((s_754974998[chckIndx(i_754975000, 0, (s_754974998).length - 1)] < 194)) {
          result_754974999 = i_754975000;
          break BeforeRet;
          }
          
            if (!(addInt(i_754975000, 1) < L_754975001)) Temporary3 = false; else {              Temporary3 = ((s_754974998[chckIndx(addInt(i_754975000, 1), 0, (s_754974998).length - 1)] >>> 6) == 2);            }          if (Temporary3) {
          i_754975000 = addInt(i_754975000, 2);
          }
          else {
            result_754974999 = i_754975000;
            break BeforeRet;
          }
          
          }
          else {
          if (((s_754974998[chckIndx(i_754975000, 0, (s_754974998).length - 1)] >>> 4) == 14)) {
            if (!(addInt(i_754975000, 2) < L_754975001)) Temporary5 = false; else {              Temporary5 = ((s_754974998[chckIndx(addInt(i_754975000, 1), 0, (s_754974998).length - 1)] >>> 6) == 2);            }            if (!Temporary5) Temporary4 = false; else {              Temporary4 = ((s_754974998[chckIndx(addInt(i_754975000, 2), 0, (s_754974998).length - 1)] >>> 6) == 2);            }          if (Temporary4) {
          i_754975000 = addInt(i_754975000, 3);
          }
          else {
            result_754974999 = i_754975000;
            break BeforeRet;
          }
          
          }
          else {
          if (((s_754974998[chckIndx(i_754975000, 0, (s_754974998).length - 1)] >>> 3) == 30)) {
            if (!(addInt(i_754975000, 3) < L_754975001)) Temporary8 = false; else {              Temporary8 = ((s_754974998[chckIndx(addInt(i_754975000, 1), 0, (s_754974998).length - 1)] >>> 6) == 2);            }            if (!Temporary8) Temporary7 = false; else {              Temporary7 = ((s_754974998[chckIndx(addInt(i_754975000, 2), 0, (s_754974998).length - 1)] >>> 6) == 2);            }            if (!Temporary7) Temporary6 = false; else {              Temporary6 = ((s_754974998[chckIndx(addInt(i_754975000, 3), 0, (s_754974998).length - 1)] >>> 6) == 2);            }          if (Temporary6) {
          i_754975000 = addInt(i_754975000, 4);
          }
          else {
            result_754974999 = i_754975000;
            break BeforeRet;
          }
          
          }
          else {
            result_754974999 = i_754975000;
            break BeforeRet;
          }
          }}}
        }
    } while (false);
    result_754974999 = -1;
    break BeforeRet;
  } while (false);

  return result_754974999;

}

function nsuRepeatChar(c_503317499, count_503317500) {
  var result_503317501 = [];

    result_503317501 = nimCopy(null, mnewString(count_503317500), NTI33554439);
    Label1: do {
      var i_503317506 = 0;
      var colontmp__889192478 = 0;
      colontmp__889192478 = subInt(count_503317500, 1);
      var res_889192479 = 0;
      Label2: do {
          Label3: while (true) {
          if (!(res_889192479 <= colontmp__889192478)) break Label3;
            i_503317506 = res_889192479;
            result_503317501[chckIndx(i_503317506, 0, (result_503317501).length - 1)] = c_503317499;
            res_889192479 = addInt(res_889192479, 1);
          }
      } while (false);
    } while (false);

  return result_503317501;

}

function alignString_1358954516(s_1358954517, minimumWidth_1358954518, align_1358954519, fill_1358954520) {
      var Temporary1;

  var result_1358954521 = [];

    if ((minimumWidth_1358954518 == 0)) {
    result_1358954521 = nimCopy(null, s_1358954517, NTI33554439);
    }
    else {
      if ((validateUtf8_754974997(s_1358954517) == -1)) {
      Temporary1 = nucruneLen(s_1358954517);
      }
      else {
      Temporary1 = (s_1358954517).length;
      }
      
      var sRuneLen_1358954522 = Temporary1;
      var toFill_1358954523 = subInt(minimumWidth_1358954518, sRuneLen_1358954522);
      if ((toFill_1358954523 <= 0)) {
      result_1358954521 = nimCopy(null, s_1358954517, NTI33554439);
      }
      else {
      if (((align_1358954519 == 60) || (align_1358954519 == 0))) {
      result_1358954521 = nimCopy(null, (s_1358954517 || []).concat(nsuRepeatChar(fill_1358954520, chckRange(toFill_1358954523, 0, 2147483647)) || []), NTI33554439);
      }
      else {
      if ((align_1358954519 == 94)) {
      var half_1358954524 = divInt(toFill_1358954523, 2);
      result_1358954521 = nimCopy(null, (nsuRepeatChar(fill_1358954520, chckRange(half_1358954524, 0, 2147483647)) || []).concat(s_1358954517 || [],nsuRepeatChar(fill_1358954520, chckRange(subInt(toFill_1358954523, half_1358954524), 0, 2147483647)) || []), NTI33554439);
      }
      else {
        result_1358954521 = nimCopy(null, (nsuRepeatChar(fill_1358954520, chckRange(toFill_1358954523, 0, 2147483647)) || []).concat(s_1358954517 || []), NTI33554439);
      }
      }}
    }
    

  return result_1358954521;

}

function formatValue_1358954658(result_1358954659, result_1358954659_Idx, value_1358954660, specifier_1358954661) {
    var spec_1358954662 = parseStandardFormatSpecifier_1358954554(specifier_1358954661, 0, false);
    var value_1358954663 = nimCopy(null, value_1358954660, NTI33554439);
    switch (spec_1358954662.typ) {
    case 115:
    case 0:
      break;
    default: 
      raiseException({message: (makeNimstrLit("invalid type in format string for string, expected \'s\', but got ") || []).concat([spec_1358954662.typ]), parent: null, m_type: NTI33555125, name: null, trace: [], up: null}, "ValueError");
      break;
    }
    if (!((spec_1358954662.precision == -1))) {
    if ((spec_1358954662.precision < nucruneLen(value_1358954663))) {
    (value_1358954663.length = chckRange(runeOffset_754975357(value_1358954663, chckRange(spec_1358954662.precision, 0, 2147483647), 0), 0, 2147483647));
    }
    
    }
    
    result_1358954659[result_1358954659_Idx].push.apply(result_1358954659[result_1358954659_Idx], alignString_1358954516(value_1358954663, spec_1358954662.minimumWidth, spec_1358954662.align, spec_1358954662.fill));;

  
}

function element_1023410183(self_1023410184) {
  var result_1023410185 = [];

  BeforeRet: do {
    var fmtRes_1023410193 = [mnewString(0)];
    fmtRes_1023410193[0].push.apply(fmtRes_1023410193[0], makeNimstrLit("class "));;
    formatValue_1358954658(fmtRes_1023410193, 0, self_1023410184.className, []);
    fmtRes_1023410193[0].push.apply(fmtRes_1023410193[0], makeNimstrLit(" extends HTMLElement {\x0A  connectedCallback() {\x0A    this.textContent = \'"));;
    formatValue_1358954658(fmtRes_1023410193, 0, self_1023410184.textContent, []);
    fmtRes_1023410193[0].push.apply(fmtRes_1023410193[0], makeNimstrLit("\';\x0A  }\x0A}\x0AcustomElements.define(\'"));;
    formatValue_1358954658(fmtRes_1023410193, 0, self_1023410184.tag, []);
    fmtRes_1023410193[0].push.apply(fmtRes_1023410193[0], makeNimstrLit("\', "));;
    formatValue_1358954658(fmtRes_1023410193, 0, self_1023410184.className, []);
    fmtRes_1023410193[0].push.apply(fmtRes_1023410193[0], makeNimstrLit(");\x0A"));;
    result_1023410185 = nimCopy(null, fmtRes_1023410193[0], NTI33554439);
    break BeforeRet;
  } while (false);

  return result_1023410185;

}

function bindJs_1023410199(self_1023410200) {
    var el_1023410201 = document.createElement("script");
    el_1023410201.innerText = toJSStr(element_1023410183(self_1023410200));
    var app_1023410202 = document.getElementById("app");
    app_1023410202.appendChild(el_1023410201);

  
}

function helloNim() {
    var helloNim_889192451 = {className: makeNimstrLit("HelloNim"), tag: makeNimstrLit("hello-nim"), textContent: makeNimstrLit("hello Nim")};
    bindJs_1023410199(helloNim_889192451);

  
}
