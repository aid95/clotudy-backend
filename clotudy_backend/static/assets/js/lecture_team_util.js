const _0x2d4b=['height','#addqnatextarea','add-like-count','sort','compareDocumentPosition','<div>','Date\x209999-99-99','add-group-message','#addgrouptextarea','avatar\x20mr-1','feather\x20icon-message-square\x20font-medium-2\x20mr-50','live-qna-chat','host','over','#addGroupModalCenter','card','stringify','d-flex\x20justify-content-start\x20align-items-center\x20mb-1','dragula-container','-box-','push','attr','call','send','lock-idea-message','show','onmessage','style','min-height:\x2020px;border:\x202px\x20solid\x20#5a5d60;border-radius:\x205px;background:\x20#b2d6ff;','close','ws://','#addideatextarea','likeCount','text','val','card-body','scrollTop','<img>','value','alt','user-page-info','scrollHeight','-group-','body','{%\x20static\x20\x27app-assets/images/profile/user-uploads/user-01.jpg\x27\x20%}','<p>','qna','src','onerror','\x20ex-over','add-idea-message','querySelector','ppt-frame','width','append','contains','row','location','querySelectorAll','move-idea-message','onclose','ex-moved','avatar\x20img\x20holder','font-small-2','className','PDFViewerApplication','border:\x202px\x20solid\x20#5a5d60;border-radius:\x205px;padding:\x203px;background:\x20#f5cf8e;margin:\x203px;','page','/ws/cloredis/sampleroomid/','appendTo','addClass','sync-ppt-page','ex-over','click','sender-id','onclick','/ws/cloredis/samplegroupid/','modal','-container-','keyCode','des','#idea-dashboard','prototype','action','#addQnAModalCenter','onkeyup','drop','replace','getElementById','contentWindow','color:\x20#565758;font-size:\x2014px;margin:\x203px;\x20font-weight:\x20bold;','data','containers','<i>','#live-qna-chat-box','<span>','mb-0','parse','group-title','messageId','#addQnAButton','ml-auto\x20d-flex\x20align-items-center','userID'];(function(_0x3e9acf,_0x2d4bbe){const _0x4881ad=function(_0x40f3a9){while(--_0x40f3a9){_0x3e9acf['push'](_0x3e9acf['shift']());}};_0x4881ad(++_0x2d4bbe);}(_0x2d4b,0x16b));const _0x4881=function(_0x3e9acf,_0x2d4bbe){_0x3e9acf=_0x3e9acf-0x0;let _0x4881ad=_0x2d4b[_0x3e9acf];return _0x4881ad;};function querySelectorAllArray(_0x204969){return Array[_0x4881('0x1c')]['slice'][_0x4881('0x47')](document[_0x4881('0x4')](_0x204969),0x0);}function contains(_0x21ce25,_0x2a09e1){return _0x21ce25[_0x4881('0x1')]?_0x21ce25!==_0x2a09e1&&_0x21ce25['contains'](_0x2a09e1):!!(_0x21ce25[_0x4881('0x35')](_0x2a09e1)&0x10);}let qna_messages;let lecture_id;let user_name;let last_over_el_id;let current_drop_el_id;let drake=dragula(querySelectorAllArray('.dragula-container'),{'accepts':function(_0xd0c461,_0x48fe1f,_0x3d0674,_0x318b39){return!contains(_0xd0c461,_0x48fe1f);}})['on']('drag',function(_0x1e4040){_0x1e4040[_0x4881('0xa')]=_0x1e4040[_0x4881('0xa')][_0x4881('0x21')](_0x4881('0x7'),'');})['on'](_0x4881('0x20'),function(_0x622c74){_0x622c74[_0x4881('0xa')]+='\x20ex-moved';current_drop_el_id=_0x622c74['id'];sendMoveIdeaPacket(current_drop_el_id,last_over_el_id);})['on'](_0x4881('0x3e'),function(_0x551ad9,_0x49eb3a){_0x49eb3a[_0x4881('0xa')]+=_0x4881('0x62');last_over_el_id=_0x49eb3a['id'];})['on']('out',function(_0x1ab76f,_0x1aa4c5){_0x1aa4c5[_0x4881('0xa')]=_0x1aa4c5[_0x4881('0xa')]['replace'](_0x4881('0x12'),'');});let increase_box_id=0x0;let current_ppt_page=0x1;let ppt_sync_flag=!![];let is_exist_new_qna=!![];function remoteSyncPPTPage(_0x38c516){if(!ppt_sync_flag){return;}let _0x4d66c8=_0x38c516[_0x4881('0x25')][_0x4881('0xd')];let _0x9d8cd=document[_0x4881('0x22')](_0x4881('0x65'))['contentWindow'][_0x4881('0xb')]['pagesCount'];if(_0x4d66c8>_0x9d8cd||_0x4d66c8<0x1){return;}document[_0x4881('0x22')](_0x4881('0x65'))[_0x4881('0x23')][_0x4881('0xb')][_0x4881('0xd')]=_0x4d66c8;}function liveQnAMessage(_0x37e9b8){let _0x4868ff=_0x37e9b8[_0x4881('0x25')][_0x4881('0x5f')];if(_0x4868ff===''){return;}let _0x42681f=_0x4868ff[_0x4881('0x5c')];let _0x4f7ab2=_0x37e9b8[_0x4881('0x25')][_0x4881('0x51')];let _0x4b7908=_0x37e9b8[_0x4881('0x25')][_0x4881('0x2d')];let _0x16423f=_0x37e9b8[_0x4881('0x25')][_0x4881('0x30')];qna_messages[_0x4881('0x45')]({'body':_0x42681f,'likeCount':_0x4f7ab2,'messageId':_0x4b7908,'userID':_0x16423f});is_exist_new_qna=!![];let _0x4c4b49=$(_0x4881('0x28'));_0x4c4b49['append']($(_0x4881('0x36'))[_0x4881('0x10')](_0x4881('0x40'))['append']($(_0x4881('0x36'))[_0x4881('0x10')](_0x4881('0x54'))[_0x4881('0x0')]($(_0x4881('0x36'))[_0x4881('0x10')](_0x4881('0x42'))[_0x4881('0x0')]($(_0x4881('0x36'))[_0x4881('0x10')](_0x4881('0x3a'))['append']($('<img>')['attr'](_0x4881('0x60'),_0x4881('0x5d'))[_0x4881('0x46')](_0x4881('0x58'),_0x4881('0x8'))[_0x4881('0x46')](_0x4881('0x31'),'45')[_0x4881('0x46')]('width','45')),$(_0x4881('0x36'))['addClass'](_0x4881('0x59'))[_0x4881('0x0')]($('<p>')[_0x4881('0x10')](_0x4881('0x2a'))['text'](user_name),$('<span>')[_0x4881('0x10')](_0x4881('0x9'))[_0x4881('0x52')]('Date\x209999-99-99'))),$(_0x4881('0x5e'))[_0x4881('0x52')](_0x42681f),$('<div>')[_0x4881('0x10')]('d-flex\x20justify-content-start\x20align-items-center\x20mb-1')[_0x4881('0x0')]($(_0x4881('0x5e'))['addClass'](_0x4881('0x2f'))[_0x4881('0x0')]($(_0x4881('0x27'))[_0x4881('0x10')](_0x4881('0x3b')))[_0x4881('0x0')](_0x4f7ab2)))));_0x4c4b49[_0x4881('0x55')](_0x4c4b49[0x0][_0x4881('0x5a')]);}function redrawSortingQnAChat(){if(!is_exist_new_qna){return;}else{is_exist_new_qna=![];}$(_0x4881('0x28'))['empty']();qna_messages[_0x4881('0x34')]((_0x19778b,_0x346548)=>{return _0x346548[_0x4881('0x51')]-_0x19778b[_0x4881('0x51')];});qna_messages['forEach'](_0x56e469=>{$(_0x4881('0x28'))[_0x4881('0x0')]($(_0x4881('0x36'))[_0x4881('0x10')]('card')[_0x4881('0x0')]($(_0x4881('0x36'))[_0x4881('0x10')]('card-body')[_0x4881('0x0')]($(_0x4881('0x36'))[_0x4881('0x10')](_0x4881('0x42'))[_0x4881('0x0')]($(_0x4881('0x36'))[_0x4881('0x10')]('avatar\x20mr-1')[_0x4881('0x0')]($(_0x4881('0x56'))['attr'](_0x4881('0x60'),_0x4881('0x5d'))[_0x4881('0x46')](_0x4881('0x58'),'avatar\x20img\x20holder')[_0x4881('0x46')](_0x4881('0x31'),'45')[_0x4881('0x46')](_0x4881('0x66'),'45')),$(_0x4881('0x36'))[_0x4881('0x10')](_0x4881('0x59'))[_0x4881('0x0')]($(_0x4881('0x5e'))[_0x4881('0x10')](_0x4881('0x2a'))[_0x4881('0x52')](user_name),$(_0x4881('0x29'))[_0x4881('0x10')](_0x4881('0x9'))[_0x4881('0x52')](_0x4881('0x37')))),$(_0x4881('0x5e'))[_0x4881('0x52')](_0x56e469[_0x4881('0x5c')]),$(_0x4881('0x36'))[_0x4881('0x10')](_0x4881('0x42'))[_0x4881('0x0')]($(_0x4881('0x5e'))[_0x4881('0x10')](_0x4881('0x2f'))[_0x4881('0x0')]($(_0x4881('0x27'))[_0x4881('0x10')](_0x4881('0x3b')))[_0x4881('0x0')](_0x56e469[_0x4881('0x51')])))));});}setInterval(redrawSortingQnAChat,0x1388);function updateLikeCount(_0xeda802){let _0xc156ab=_0xeda802['data']['messageId'];for(let _0x2b3173=0x0;_0x2b3173<qna_messages['length'];_0x2b3173++){if(qna_messages[_0x2b3173][_0x4881('0x2d')]===_0xc156ab){qna_messages[_0x2b3173][_0x4881('0x51')]+=0x1;break;}}}function addIdeaMessage(_0x4f6352){let _0x108d3e=_0x4f6352[_0x4881('0x25')][_0x4881('0x5c')];const _0xc3057a=_0x4f6352[_0x4881('0x25')][_0x4881('0x14')];const _0x363963=_0xc3057a+_0x4881('0x44')+increase_box_id;$('#idea-dashboard')[_0x4881('0x0')]($(_0x4881('0x5e'))[_0x4881('0x46')]('style','line-height:\x2014px;\x20margin:\x200;display:\x20table-cell;vertical-align:\x20middle;padding:\x2010px;\x20border-radius:\x205px;background:\x20#f6f7f8;border:\x202px\x20solid\x20#5a5d60;')[_0x4881('0x46')]('id',_0x363963)[_0x4881('0x10')]('el')[_0x4881('0x52')](_0x108d3e));increase_box_id+=0x1;}function addGroupMessage(_0x1380aa){const _0x268db3=_0x1380aa[_0x4881('0x25')][_0x4881('0x2c')];const _0x2496e4=_0x1380aa[_0x4881('0x25')]['sender-id'];const _0xe00e40=_0x2496e4+_0x4881('0x5b')+increase_box_id;const _0x579988=_0x2496e4+_0x4881('0x18')+increase_box_id;;$(_0x4881('0x1b'))[_0x4881('0x0')]($(_0x4881('0x36'))[_0x4881('0x46')]('id',_0xe00e40)[_0x4881('0x46')](_0x4881('0x4c'),_0x4881('0xc'))['addClass'](_0x4881('0x2'))[_0x4881('0x0')]($(_0x4881('0x36'))[_0x4881('0x46')](_0x4881('0x4c'),_0x4881('0x24'))[_0x4881('0x52')](_0x268db3),$(_0x4881('0x36'))[_0x4881('0x46')]('id',_0x579988)[_0x4881('0x46')](_0x4881('0x4c'),_0x4881('0x4d'))[_0x4881('0x10')](_0x4881('0x43'))));drake[_0x4881('0x26')][_0x4881('0x45')](document[_0x4881('0x22')](_0x579988));increase_box_id+=0x1;}function moveIdeaMessage(_0x5a4778){if(unique_id===_0x5a4778[_0x4881('0x25')]['sender-id']){return;}let _0xfb52a2=_0x5a4778[_0x4881('0x25')];let _0x2a3388='#'+_0xfb52a2[_0x4881('0x60')];let _0x525f2b='#'+_0xfb52a2[_0x4881('0x1a')];$(_0x2a3388)[_0x4881('0xf')](_0x525f2b);}function lockIdeaMessage(_0x4da8ad){}function removeIdeaMessage(_0x3374c5){}let groupSocket;function group_socket_connect(){groupSocket=new WebSocket('ws://'+window[_0x4881('0x3')][_0x4881('0x3d')]+_0x4881('0x16'));groupSocket[_0x4881('0x4b')]=_0x52462e=>{let _0x23ee76=JSON[_0x4881('0x2b')](_0x52462e[_0x4881('0x25')]);switch(_0x23ee76[_0x4881('0x1d')]){case _0x4881('0x63'):addIdeaMessage(_0x23ee76);break;case _0x4881('0x5'):moveIdeaMessage(_0x23ee76);break;case _0x4881('0x49'):lockIdeaMessage(_0x23ee76);break;case'remove-idea-message':removeIdeaMessage(_0x23ee76);break;case'add-group-message':addGroupMessage(_0x23ee76);break;default:break;}};groupSocket[_0x4881('0x6')]=_0x164403=>{setTimeout(()=>{group_socket_connect();},0x3e8);};groupSocket[_0x4881('0x61')]=_0x24e31a=>{groupSocket['close']();};}group_socket_connect();let chatSocket;function chat_socket_connect(){chatSocket=new WebSocket(_0x4881('0x4f')+window[_0x4881('0x3')][_0x4881('0x3d')]+_0x4881('0xe'));chatSocket['onmessage']=_0x35b22a=>{let _0x24ebc7=JSON[_0x4881('0x2b')](_0x35b22a[_0x4881('0x25')]);switch(_0x24ebc7[_0x4881('0x1d')]){case _0x4881('0x11'):remoteSyncPPTPage(_0x24ebc7);break;case _0x4881('0x3c'):liveQnAMessage(_0x24ebc7);break;case _0x4881('0x33'):updateLikeCount(_0x24ebc7);break;default:break;}};chatSocket[_0x4881('0x6')]=_0x35b0be=>{setTimeout(()=>{chat_socket_connect();},0x3e8);};chatSocket[_0x4881('0x61')]=_0x5b11a7=>{chatSocket[_0x4881('0x4e')]();};}chat_socket_connect();function showAddQnAModal(){$(_0x4881('0x1e'))[_0x4881('0x17')](_0x4881('0x4a'));}document[_0x4881('0x64')]('#addqnatextarea')[_0x4881('0x1f')]=function(_0x2d16ab){if(_0x2d16ab[_0x4881('0x19')]===0xd){document[_0x4881('0x64')](_0x4881('0x2e'))[_0x4881('0x13')]();}};document[_0x4881('0x64')](_0x4881('0x2e'))[_0x4881('0x15')]=_0x21aa13=>{let _0x5359f6=document['querySelector'](_0x4881('0x32'));let _0x40208e=_0x5359f6[_0x4881('0x57')];chatSocket[_0x4881('0x48')](JSON['stringify']({'action':_0x4881('0x3c'),'data':{'qna':{'body':_0x40208e},'lecture':lecture_id}}));_0x5359f6[_0x4881('0x57')]='';};function sendLikeCountPacket(_0x3532dd){chatSocket[_0x4881('0x48')](JSON[_0x4881('0x41')]({'action':'add-like-count','data':{'messageId':_0x3532dd,'lecture':lecture_id}}));}function showAddIdeaModal(){$('#addIdeaModalCenter')[_0x4881('0x17')](_0x4881('0x4a'));}function sendAddIdeaPacket(){let _0x513514=$(_0x4881('0x50'))['val']();groupSocket[_0x4881('0x48')](JSON['stringify']({'action':_0x4881('0x63'),'data':{'body':_0x513514,'sender-id':unique_id}}));}function showAddGroupModal(){$(_0x4881('0x3f'))[_0x4881('0x17')](_0x4881('0x4a'));}function sendAddGroupPacket(){let _0x7a0f6a=$(_0x4881('0x39'))[_0x4881('0x53')]();groupSocket['send'](JSON[_0x4881('0x41')]({'action':_0x4881('0x38'),'data':{'group-title':_0x7a0f6a,'sender-id':unique_id}}));}function sendMoveIdeaPacket(_0x5c66b2,_0x5ba7c2){groupSocket[_0x4881('0x48')](JSON['stringify']({'action':_0x4881('0x5'),'data':{'src':_0x5c66b2,'des':_0x5ba7c2,'sender-id':unique_id}}));}function lecture_init(_0x261fbb,_0x4d6f73,_0x3014d9){lecture_id=_0x261fbb;qna_messages=_0x4d6f73;user_name=_0x3014d9;}