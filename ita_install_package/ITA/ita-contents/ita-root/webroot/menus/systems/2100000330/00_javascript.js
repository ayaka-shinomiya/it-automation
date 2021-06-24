//   Copyright 2021 NEC Corporation
//
//   Licensed under the Apache License, Version 2.0 (the "License");
//   you may not use this file except in compliance with the License.
//   You may obtain a copy of the License at
//
//       http://www.apache.org/licenses/LICENSE-2.0
//
//   Unless required by applicable law or agreed to in writing, software
//   distributed under the License is distributed on an "AS IS" BASIS,
//   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//   See the License for the specific language governing permissions and
//   limitations under the License.
//
$(function(){
    var menu_on = $('.menu-on').attr('id');
    $('.menu_on').val(menu_on);


    $('#import_form').submit(function(){
        
        var checked_num = $('#Mix2_Nakami :checked').length;
        if(checked_num == 0) {
            $('#importMsg').text(getSomeMessage('ITABASEC090003'));
            return false;
        }

        $('#uploadMsg').text('');
        $('#importMsg').text('');

        if(!confirm(getSomeMessage('ITABASEC2100000330_1'))) {
            return false;
        } else {
            if(!$('#import_whole').prop('checked')) {
                if(!confirm(getSomeMessage('ITABASEC090006'))) {
                    return false;
                }
            }
            $('#zipInputSubmit').prop('disabled',true);
        }
    });

    $('#import_form :input').prop('checked', true);

    $('#zipInputSubmit').on('click', function(){
        var f = $('#zipinput');
        var f_length = f[0].files.length;
        if(f_length == 0) {
            $('#uploadMsg').text(getSomeMessage('ITABASEC090005'));
            return false;
        }
    });

    $('#zipInputSubmit').submit(function(){
        $('#uploadMsg').text('');
        $('#importMsg').text('');
        $('#zipInputSubmit').prop('disabled', true);
    });

    let import_whole = document.getElementById("import_whole");
    let checkboxList = document.getElementsByClassName('menu_id_checkbox');
    for (let i = 0; i < checkboxList.length; i++) {
        let trList = checkboxList[i].parentNode.parentNode;
        trList.addEventListener('click', function(e){
            checkClick(e.target.parentNode.children[0].children[0]);
            for (let l = 0; l < checkboxList.length; l++) {
                if (checkboxList[l].checked == false) {
                    import_whole.checked = false;
                    break;
                }
                import_whole.checked = true;
            }
        });
    }

    $("#import_whole").click(function(e){
        if (e.target.checked) {
            for (let i = 0; i < checkboxList.length; i++) {
                checkboxList[i].checked = true;
            }
        } else {
            for (let i = 0; i < checkboxList.length; i++) {
                checkboxList[i].checked = false;
            }
        }
    });

    function checkClick(trg) {
        if (!trg.disabled) {
            if (trg.checked == true) {
                trg.checked = false;
            } else if (trg.checked == false) {
                trg.checked = true;
            }
        }
    }


    show('SetsumeiMidashi', 'SetsumeiNakami');
    show('Mix2_Midashi', 'Mix2_Nakami');
});
