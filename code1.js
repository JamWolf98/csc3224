gdjs.Scene1Code = {};
gdjs.Scene1Code.GDPlayerObjects1= [];
gdjs.Scene1Code.GDPlayerObjects2= [];
gdjs.Scene1Code.GDPlayerObjects3= [];
gdjs.Scene1Code.GDPlayerObjects4= [];
gdjs.Scene1Code.GDGrapplePointObjects1= [];
gdjs.Scene1Code.GDGrapplePointObjects2= [];
gdjs.Scene1Code.GDGrapplePointObjects3= [];
gdjs.Scene1Code.GDGrapplePointObjects4= [];
gdjs.Scene1Code.GDCheckpointObjects1= [];
gdjs.Scene1Code.GDCheckpointObjects2= [];
gdjs.Scene1Code.GDCheckpointObjects3= [];
gdjs.Scene1Code.GDCheckpointObjects4= [];
gdjs.Scene1Code.GDLeftObjects1= [];
gdjs.Scene1Code.GDLeftObjects2= [];
gdjs.Scene1Code.GDLeftObjects3= [];
gdjs.Scene1Code.GDLeftObjects4= [];
gdjs.Scene1Code.GDSlimeObjects1= [];
gdjs.Scene1Code.GDSlimeObjects2= [];
gdjs.Scene1Code.GDSlimeObjects3= [];
gdjs.Scene1Code.GDSlimeObjects4= [];
gdjs.Scene1Code.GDRightObjects1= [];
gdjs.Scene1Code.GDRightObjects2= [];
gdjs.Scene1Code.GDRightObjects3= [];
gdjs.Scene1Code.GDRightObjects4= [];
gdjs.Scene1Code.GDFPSCounterObjects1= [];
gdjs.Scene1Code.GDFPSCounterObjects2= [];
gdjs.Scene1Code.GDFPSCounterObjects3= [];
gdjs.Scene1Code.GDFPSCounterObjects4= [];
gdjs.Scene1Code.GDLivesCounterObjects1= [];
gdjs.Scene1Code.GDLivesCounterObjects2= [];
gdjs.Scene1Code.GDLivesCounterObjects3= [];
gdjs.Scene1Code.GDLivesCounterObjects4= [];
gdjs.Scene1Code.GDGameOverPopupObjects1= [];
gdjs.Scene1Code.GDGameOverPopupObjects2= [];
gdjs.Scene1Code.GDGameOverPopupObjects3= [];
gdjs.Scene1Code.GDGameOverPopupObjects4= [];
gdjs.Scene1Code.GDBoundaryObjects1= [];
gdjs.Scene1Code.GDBoundaryObjects2= [];
gdjs.Scene1Code.GDBoundaryObjects3= [];
gdjs.Scene1Code.GDBoundaryObjects4= [];
gdjs.Scene1Code.GDCastlePlatformTopObjects1= [];
gdjs.Scene1Code.GDCastlePlatformTopObjects2= [];
gdjs.Scene1Code.GDCastlePlatformTopObjects3= [];
gdjs.Scene1Code.GDCastlePlatformTopObjects4= [];
gdjs.Scene1Code.GDCastlePlatformLowerObjects1= [];
gdjs.Scene1Code.GDCastlePlatformLowerObjects2= [];
gdjs.Scene1Code.GDCastlePlatformLowerObjects3= [];
gdjs.Scene1Code.GDCastlePlatformLowerObjects4= [];
gdjs.Scene1Code.GDCastleTowerInnerObjects1= [];
gdjs.Scene1Code.GDCastleTowerInnerObjects2= [];
gdjs.Scene1Code.GDCastleTowerInnerObjects3= [];
gdjs.Scene1Code.GDCastleTowerInnerObjects4= [];
gdjs.Scene1Code.GDCastleTowerOuterObjects1= [];
gdjs.Scene1Code.GDCastleTowerOuterObjects2= [];
gdjs.Scene1Code.GDCastleTowerOuterObjects3= [];
gdjs.Scene1Code.GDCastleTowerOuterObjects4= [];
gdjs.Scene1Code.GDGameOverTipObjects1= [];
gdjs.Scene1Code.GDGameOverTipObjects2= [];
gdjs.Scene1Code.GDGameOverTipObjects3= [];
gdjs.Scene1Code.GDGameOverTipObjects4= [];
gdjs.Scene1Code.GDKeyObjects1= [];
gdjs.Scene1Code.GDKeyObjects2= [];
gdjs.Scene1Code.GDKeyObjects3= [];
gdjs.Scene1Code.GDKeyObjects4= [];
gdjs.Scene1Code.GDKeyUIObjects1= [];
gdjs.Scene1Code.GDKeyUIObjects2= [];
gdjs.Scene1Code.GDKeyUIObjects3= [];
gdjs.Scene1Code.GDKeyUIObjects4= [];
gdjs.Scene1Code.GDDoorObjects1= [];
gdjs.Scene1Code.GDDoorObjects2= [];
gdjs.Scene1Code.GDDoorObjects3= [];
gdjs.Scene1Code.GDDoorObjects4= [];

gdjs.Scene1Code.conditionTrue_0 = {val:false};
gdjs.Scene1Code.condition0IsTrue_0 = {val:false};
gdjs.Scene1Code.condition1IsTrue_0 = {val:false};
gdjs.Scene1Code.condition2IsTrue_0 = {val:false};
gdjs.Scene1Code.condition3IsTrue_0 = {val:false};
gdjs.Scene1Code.condition4IsTrue_0 = {val:false};
gdjs.Scene1Code.condition5IsTrue_0 = {val:false};
gdjs.Scene1Code.condition6IsTrue_0 = {val:false};
gdjs.Scene1Code.conditionTrue_1 = {val:false};
gdjs.Scene1Code.condition0IsTrue_1 = {val:false};
gdjs.Scene1Code.condition1IsTrue_1 = {val:false};
gdjs.Scene1Code.condition2IsTrue_1 = {val:false};
gdjs.Scene1Code.condition3IsTrue_1 = {val:false};
gdjs.Scene1Code.condition4IsTrue_1 = {val:false};
gdjs.Scene1Code.condition5IsTrue_1 = {val:false};
gdjs.Scene1Code.condition6IsTrue_1 = {val:false};


gdjs.Scene1Code.mapOfGDgdjs_46Scene1Code_46GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs.Scene1Code.GDPlayerObjects2});gdjs.Scene1Code.mapOfGDgdjs_46Scene1Code_46GDGrapplePointObjects2Objects = Hashtable.newFrom({"GrapplePoint": gdjs.Scene1Code.GDGrapplePointObjects2});gdjs.Scene1Code.mapOfGDgdjs_46Scene1Code_46GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs.Scene1Code.GDPlayerObjects2});gdjs.Scene1Code.mapOfGDgdjs_46Scene1Code_46GDGrapplePointObjects2Objects = Hashtable.newFrom({"GrapplePoint": gdjs.Scene1Code.GDGrapplePointObjects2});gdjs.Scene1Code.eventsList0x72b8ec = function(runtimeScene) {

{

gdjs.Scene1Code.GDGrapplePointObjects2.createFrom(runtimeScene.getObjects("GrapplePoint"));
/* Reuse gdjs.Scene1Code.GDPlayerObjects2 */

gdjs.Scene1Code.condition0IsTrue_0.val = false;
gdjs.Scene1Code.condition1IsTrue_0.val = false;
{
gdjs.Scene1Code.condition0IsTrue_0.val = gdjs.evtTools.object.distanceTest(gdjs.Scene1Code.mapOfGDgdjs_46Scene1Code_46GDPlayerObjects2Objects, gdjs.Scene1Code.mapOfGDgdjs_46Scene1Code_46GDGrapplePointObjects2Objects, 700, false);
}if ( gdjs.Scene1Code.condition0IsTrue_0.val ) {
{
gdjs.Scene1Code.condition1IsTrue_0.val = gdjs.evtTools.object.turnedTowardTest(gdjs.Scene1Code.mapOfGDgdjs_46Scene1Code_46GDPlayerObjects2Objects, gdjs.Scene1Code.mapOfGDgdjs_46Scene1Code_46GDGrapplePointObjects2Objects, 190, false);
}}
if (gdjs.Scene1Code.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(6).setNumber(1);
}}

}


}; //End of gdjs.Scene1Code.eventsList0x72b8ec
gdjs.Scene1Code.eventsList0x6b13e4 = function(runtimeScene) {

{

gdjs.Scene1Code.GDFPSCounterObjects1.createFrom(runtimeScene.getObjects("FPSCounter"));

gdjs.Scene1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Scene1Code.GDFPSCounterObjects1.length;i<l;++i) {
    if ( !(gdjs.Scene1Code.GDFPSCounterObjects1[i].isVisible()) ) {
        gdjs.Scene1Code.condition0IsTrue_0.val = true;
        gdjs.Scene1Code.GDFPSCounterObjects1[k] = gdjs.Scene1Code.GDFPSCounterObjects1[i];
        ++k;
    }
}
gdjs.Scene1Code.GDFPSCounterObjects1.length = k;}if (gdjs.Scene1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Scene1Code.GDFPSCounterObjects1 */
{for(var i = 0, len = gdjs.Scene1Code.GDFPSCounterObjects1.length ;i < len;++i) {
    gdjs.Scene1Code.GDFPSCounterObjects1[i].hide(false);
}
}}

}


}; //End of gdjs.Scene1Code.eventsList0x6b13e4
gdjs.Scene1Code.eventsList0x686e4c = function(runtimeScene) {

{


gdjs.Scene1Code.condition0IsTrue_0.val = false;
gdjs.Scene1Code.condition1IsTrue_0.val = false;
{
gdjs.Scene1Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
}if ( gdjs.Scene1Code.condition0IsTrue_0.val ) {
{
gdjs.Scene1Code.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(5)) == 1;
}}
if (gdjs.Scene1Code.condition1IsTrue_0.val) {
gdjs.Scene1Code.GDPlayerObjects2.createFrom(runtimeScene.getObjects("Player"));
{for(var i = 0, len = gdjs.Scene1Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Scene1Code.GDPlayerObjects2[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}{for(var i = 0, len = gdjs.Scene1Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Scene1Code.GDPlayerObjects2[i].rotateTowardAngle(180, 0, runtimeScene);
}
}{for(var i = 0, len = gdjs.Scene1Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Scene1Code.GDPlayerObjects2[i].flipY(true);
}
}}

}


{


gdjs.Scene1Code.condition0IsTrue_0.val = false;
gdjs.Scene1Code.condition1IsTrue_0.val = false;
{
gdjs.Scene1Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
}if ( gdjs.Scene1Code.condition0IsTrue_0.val ) {
{
gdjs.Scene1Code.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(5)) == 1;
}}
if (gdjs.Scene1Code.condition1IsTrue_0.val) {
gdjs.Scene1Code.GDPlayerObjects2.createFrom(runtimeScene.getObjects("Player"));
{for(var i = 0, len = gdjs.Scene1Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Scene1Code.GDPlayerObjects2[i].getBehavior("PlatformerObject").simulateRightKey();
}
}{for(var i = 0, len = gdjs.Scene1Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Scene1Code.GDPlayerObjects2[i].rotateTowardAngle(0, 0, runtimeScene);
}
}{for(var i = 0, len = gdjs.Scene1Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Scene1Code.GDPlayerObjects2[i].flipY(false);
}
}}

}


{


gdjs.Scene1Code.condition0IsTrue_0.val = false;
gdjs.Scene1Code.condition1IsTrue_0.val = false;
{
gdjs.Scene1Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
}if ( gdjs.Scene1Code.condition0IsTrue_0.val ) {
{
gdjs.Scene1Code.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(5)) == 1;
}}
if (gdjs.Scene1Code.condition1IsTrue_0.val) {
gdjs.Scene1Code.GDPlayerObjects2.createFrom(runtimeScene.getObjects("Player"));
{for(var i = 0, len = gdjs.Scene1Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Scene1Code.GDPlayerObjects2[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}}

}


{

gdjs.Scene1Code.GDPlayerObjects2.createFrom(runtimeScene.getObjects("Player"));

gdjs.Scene1Code.condition0IsTrue_0.val = false;
gdjs.Scene1Code.condition1IsTrue_0.val = false;
gdjs.Scene1Code.condition2IsTrue_0.val = false;
gdjs.Scene1Code.condition3IsTrue_0.val = false;
gdjs.Scene1Code.condition4IsTrue_0.val = false;
gdjs.Scene1Code.condition5IsTrue_0.val = false;
{
gdjs.Scene1Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.Scene1Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Scene1Code.GDPlayerObjects2.length;i<l;++i) {
    if ( !(gdjs.Scene1Code.GDPlayerObjects2[i].getBehavior("PlatformerObject").isJumping()) ) {
        gdjs.Scene1Code.condition1IsTrue_0.val = true;
        gdjs.Scene1Code.GDPlayerObjects2[k] = gdjs.Scene1Code.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.Scene1Code.GDPlayerObjects2.length = k;}if ( gdjs.Scene1Code.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Scene1Code.GDPlayerObjects2.length;i<l;++i) {
    if ( !(gdjs.Scene1Code.GDPlayerObjects2[i].getBehavior("PlatformerObject").isFalling()) ) {
        gdjs.Scene1Code.condition2IsTrue_0.val = true;
        gdjs.Scene1Code.GDPlayerObjects2[k] = gdjs.Scene1Code.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.Scene1Code.GDPlayerObjects2.length = k;}if ( gdjs.Scene1Code.condition2IsTrue_0.val ) {
{
gdjs.Scene1Code.condition3IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) == 0;
}if ( gdjs.Scene1Code.condition3IsTrue_0.val ) {
{
gdjs.Scene1Code.condition4IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(5)) == 1;
}if ( gdjs.Scene1Code.condition4IsTrue_0.val ) {
{
{gdjs.Scene1Code.conditionTrue_1 = gdjs.Scene1Code.condition5IsTrue_0;
gdjs.Scene1Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7518148);
}
}}
}
}
}
}
if (gdjs.Scene1Code.condition5IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(4).setNumber(1);
}}

}


{

gdjs.Scene1Code.GDPlayerObjects2.createFrom(runtimeScene.getObjects("Player"));

gdjs.Scene1Code.condition0IsTrue_0.val = false;
gdjs.Scene1Code.condition1IsTrue_0.val = false;
gdjs.Scene1Code.condition2IsTrue_0.val = false;
gdjs.Scene1Code.condition3IsTrue_0.val = false;
gdjs.Scene1Code.condition4IsTrue_0.val = false;
gdjs.Scene1Code.condition5IsTrue_0.val = false;
{
gdjs.Scene1Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Right");
}if ( gdjs.Scene1Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Scene1Code.GDPlayerObjects2.length;i<l;++i) {
    if ( !(gdjs.Scene1Code.GDPlayerObjects2[i].getBehavior("PlatformerObject").isJumping()) ) {
        gdjs.Scene1Code.condition1IsTrue_0.val = true;
        gdjs.Scene1Code.GDPlayerObjects2[k] = gdjs.Scene1Code.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.Scene1Code.GDPlayerObjects2.length = k;}if ( gdjs.Scene1Code.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Scene1Code.GDPlayerObjects2.length;i<l;++i) {
    if ( !(gdjs.Scene1Code.GDPlayerObjects2[i].getBehavior("PlatformerObject").isFalling()) ) {
        gdjs.Scene1Code.condition2IsTrue_0.val = true;
        gdjs.Scene1Code.GDPlayerObjects2[k] = gdjs.Scene1Code.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.Scene1Code.GDPlayerObjects2.length = k;}if ( gdjs.Scene1Code.condition2IsTrue_0.val ) {
{
gdjs.Scene1Code.condition3IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) == 0;
}if ( gdjs.Scene1Code.condition3IsTrue_0.val ) {
{
gdjs.Scene1Code.condition4IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(5)) == 1;
}if ( gdjs.Scene1Code.condition4IsTrue_0.val ) {
{
{gdjs.Scene1Code.conditionTrue_1 = gdjs.Scene1Code.condition5IsTrue_0;
gdjs.Scene1Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7472876);
}
}}
}
}
}
}
if (gdjs.Scene1Code.condition5IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(3).setNumber(1);
}
{ //Subevents
gdjs.Scene1Code.eventsList0x72b8ec(runtimeScene);} //End of subevents
}

}


{

gdjs.Scene1Code.GDKeyUIObjects2.createFrom(runtimeScene.getObjects("KeyUI"));

gdjs.Scene1Code.condition0IsTrue_0.val = false;
gdjs.Scene1Code.condition1IsTrue_0.val = false;
{
gdjs.Scene1Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "e");
}if ( gdjs.Scene1Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Scene1Code.GDKeyUIObjects2.length;i<l;++i) {
    if ( gdjs.Scene1Code.GDKeyUIObjects2[i].isVisible() ) {
        gdjs.Scene1Code.condition1IsTrue_0.val = true;
        gdjs.Scene1Code.GDKeyUIObjects2[k] = gdjs.Scene1Code.GDKeyUIObjects2[i];
        ++k;
    }
}
gdjs.Scene1Code.GDKeyUIObjects2.length = k;}}
if (gdjs.Scene1Code.condition1IsTrue_0.val) {
gdjs.Scene1Code.GDDoorObjects2.createFrom(runtimeScene.getObjects("Door"));
{for(var i = 0, len = gdjs.Scene1Code.GDDoorObjects2.length ;i < len;++i) {
    gdjs.Scene1Code.GDDoorObjects2[i].setAnimationName("Open");
}
}}

}


{

gdjs.Scene1Code.GDDoorObjects2.createFrom(runtimeScene.getObjects("Door"));

gdjs.Scene1Code.condition0IsTrue_0.val = false;
gdjs.Scene1Code.condition1IsTrue_0.val = false;
{
gdjs.Scene1Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
}if ( gdjs.Scene1Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Scene1Code.GDDoorObjects2.length;i<l;++i) {
    if ( gdjs.Scene1Code.GDDoorObjects2[i].isCurrentAnimationName("Open") ) {
        gdjs.Scene1Code.condition1IsTrue_0.val = true;
        gdjs.Scene1Code.GDDoorObjects2[k] = gdjs.Scene1Code.GDDoorObjects2[i];
        ++k;
    }
}
gdjs.Scene1Code.GDDoorObjects2.length = k;}}
if (gdjs.Scene1Code.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Menu", true);
}}

}


{


gdjs.Scene1Code.condition0IsTrue_0.val = false;
{
gdjs.Scene1Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Right");
}if (gdjs.Scene1Code.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(6).setNumber(0);
}}

}


{


gdjs.Scene1Code.condition0IsTrue_0.val = false;
{
gdjs.Scene1Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "F1");
}if (gdjs.Scene1Code.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(9).setNumber(999);
}}

}


{


gdjs.Scene1Code.condition0IsTrue_0.val = false;
{
gdjs.Scene1Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "F2");
}if (gdjs.Scene1Code.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(10).setNumber(1);
}}

}


{


gdjs.Scene1Code.condition0IsTrue_0.val = false;
{
gdjs.Scene1Code.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "F3");
}if (gdjs.Scene1Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Scene1Code.eventsList0x6b13e4(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.Scene1Code.eventsList0x686e4c
gdjs.Scene1Code.eventsList0x786e4c = function(runtimeScene) {

{

gdjs.Scene1Code.GDPlayerObjects3.createFrom(gdjs.Scene1Code.GDPlayerObjects2);


gdjs.Scene1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Scene1Code.GDPlayerObjects3.length;i<l;++i) {
    if ( !(gdjs.Scene1Code.GDPlayerObjects3[i].getBehavior("PlatformerObject").isMoving()) ) {
        gdjs.Scene1Code.condition0IsTrue_0.val = true;
        gdjs.Scene1Code.GDPlayerObjects3[k] = gdjs.Scene1Code.GDPlayerObjects3[i];
        ++k;
    }
}
gdjs.Scene1Code.GDPlayerObjects3.length = k;}if (gdjs.Scene1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Scene1Code.GDPlayerObjects3 */
{for(var i = 0, len = gdjs.Scene1Code.GDPlayerObjects3.length ;i < len;++i) {
    gdjs.Scene1Code.GDPlayerObjects3[i].setAnimationName("Idle");
}
}}

}


{

/* Reuse gdjs.Scene1Code.GDPlayerObjects2 */

gdjs.Scene1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Scene1Code.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.Scene1Code.GDPlayerObjects2[i].getBehavior("PlatformerObject").isMoving() ) {
        gdjs.Scene1Code.condition0IsTrue_0.val = true;
        gdjs.Scene1Code.GDPlayerObjects2[k] = gdjs.Scene1Code.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.Scene1Code.GDPlayerObjects2.length = k;}if (gdjs.Scene1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Scene1Code.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.Scene1Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Scene1Code.GDPlayerObjects2[i].setAnimationName("Running");
}
}}

}


}; //End of gdjs.Scene1Code.eventsList0x786e4c
gdjs.Scene1Code.mapOfGDgdjs_46Scene1Code_46GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs.Scene1Code.GDPlayerObjects2});gdjs.Scene1Code.mapOfGDgdjs_46Scene1Code_46GDSlimeObjects2Objects = Hashtable.newFrom({"Slime": gdjs.Scene1Code.GDSlimeObjects2});gdjs.Scene1Code.mapOfGDgdjs_46Scene1Code_46GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs.Scene1Code.GDPlayerObjects2});gdjs.Scene1Code.mapOfGDgdjs_46Scene1Code_46GDSlimeObjects2Objects = Hashtable.newFrom({"Slime": gdjs.Scene1Code.GDSlimeObjects2});gdjs.Scene1Code.eventsList0x74e4bc = function(runtimeScene) {

{


gdjs.Scene1Code.condition0IsTrue_0.val = false;
{
{gdjs.Scene1Code.conditionTrue_1 = gdjs.Scene1Code.condition0IsTrue_0;
gdjs.Scene1Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7661108);
}
}if (gdjs.Scene1Code.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "sword-swing.wav", false, 100, 1);
}}

}


{

/* Reuse gdjs.Scene1Code.GDPlayerObjects2 */
gdjs.Scene1Code.GDSlimeObjects2.createFrom(runtimeScene.getObjects("Slime"));

gdjs.Scene1Code.condition0IsTrue_0.val = false;
gdjs.Scene1Code.condition1IsTrue_0.val = false;
gdjs.Scene1Code.condition2IsTrue_0.val = false;
{
gdjs.Scene1Code.condition0IsTrue_0.val = gdjs.evtTools.object.distanceTest(gdjs.Scene1Code.mapOfGDgdjs_46Scene1Code_46GDPlayerObjects2Objects, gdjs.Scene1Code.mapOfGDgdjs_46Scene1Code_46GDSlimeObjects2Objects, 120, false);
}if ( gdjs.Scene1Code.condition0IsTrue_0.val ) {
{
gdjs.Scene1Code.condition1IsTrue_0.val = gdjs.evtTools.object.turnedTowardTest(gdjs.Scene1Code.mapOfGDgdjs_46Scene1Code_46GDPlayerObjects2Objects, gdjs.Scene1Code.mapOfGDgdjs_46Scene1Code_46GDSlimeObjects2Objects, 180, false);
}if ( gdjs.Scene1Code.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Scene1Code.GDSlimeObjects2.length;i<l;++i) {
    if ( gdjs.Scene1Code.GDSlimeObjects2[i].getVariableNumber(gdjs.Scene1Code.GDSlimeObjects2[i].getVariables().getFromIndex(1)) == 0 ) {
        gdjs.Scene1Code.condition2IsTrue_0.val = true;
        gdjs.Scene1Code.GDSlimeObjects2[k] = gdjs.Scene1Code.GDSlimeObjects2[i];
        ++k;
    }
}
gdjs.Scene1Code.GDSlimeObjects2.length = k;}}
}
if (gdjs.Scene1Code.condition2IsTrue_0.val) {
/* Reuse gdjs.Scene1Code.GDSlimeObjects2 */
{gdjs.evtTools.sound.playSound(runtimeScene, "sword-hit.mp3", false, 100, 1);
}{for(var i = 0, len = gdjs.Scene1Code.GDSlimeObjects2.length ;i < len;++i) {
    gdjs.Scene1Code.GDSlimeObjects2[i].returnVariable(gdjs.Scene1Code.GDSlimeObjects2[i].getVariables().getFromIndex(1)).setNumber(1);
}
}}

}


}; //End of gdjs.Scene1Code.eventsList0x74e4bc
gdjs.Scene1Code.eventsList0x7327cc = function(runtimeScene) {

{

/* Reuse gdjs.Scene1Code.GDPlayerObjects2 */

gdjs.Scene1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Scene1Code.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.Scene1Code.GDPlayerObjects2[i].getAnimationFrame() == 3 ) {
        gdjs.Scene1Code.condition0IsTrue_0.val = true;
        gdjs.Scene1Code.GDPlayerObjects2[k] = gdjs.Scene1Code.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.Scene1Code.GDPlayerObjects2.length = k;}if (gdjs.Scene1Code.condition0IsTrue_0.val) {

{ //Subevents
gdjs.Scene1Code.eventsList0x74e4bc(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.Scene1Code.eventsList0x7327cc
gdjs.Scene1Code.mapOfGDgdjs_46Scene1Code_46GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs.Scene1Code.GDPlayerObjects2});gdjs.Scene1Code.mapOfGDgdjs_46Scene1Code_46GDGrapplePointObjects2Objects = Hashtable.newFrom({"GrapplePoint": gdjs.Scene1Code.GDGrapplePointObjects2});gdjs.Scene1Code.mapOfGDgdjs_46Scene1Code_46GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs.Scene1Code.GDPlayerObjects2});gdjs.Scene1Code.mapOfGDgdjs_46Scene1Code_46GDGrapplePointObjects2Objects = Hashtable.newFrom({"GrapplePoint": gdjs.Scene1Code.GDGrapplePointObjects2});gdjs.Scene1Code.mapOfGDgdjs_46Scene1Code_46GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs.Scene1Code.GDPlayerObjects2});gdjs.Scene1Code.mapOfGDgdjs_46Scene1Code_46GDGrapplePointObjects2Objects = Hashtable.newFrom({"GrapplePoint": gdjs.Scene1Code.GDGrapplePointObjects2});gdjs.Scene1Code.mapOfGDgdjs_46Scene1Code_46GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs.Scene1Code.GDPlayerObjects2});gdjs.Scene1Code.mapOfGDgdjs_46Scene1Code_46GDCheckpointObjects2Objects = Hashtable.newFrom({"Checkpoint": gdjs.Scene1Code.GDCheckpointObjects2});gdjs.Scene1Code.eventsList0x6a8ffc = function(runtimeScene) {

{


gdjs.Scene1Code.condition0IsTrue_0.val = false;
{
{gdjs.Scene1Code.conditionTrue_1 = gdjs.Scene1Code.condition0IsTrue_0;
gdjs.Scene1Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(6984820);
}
}if (gdjs.Scene1Code.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "player-jump.wav", false, 25, 1);
}}

}


}; //End of gdjs.Scene1Code.eventsList0x6a8ffc
gdjs.Scene1Code.mapOfGDgdjs_46Scene1Code_46GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs.Scene1Code.GDPlayerObjects2});gdjs.Scene1Code.eventsList0x6b06ec = function(runtimeScene) {

{


gdjs.Scene1Code.condition0IsTrue_0.val = false;
{
gdjs.Scene1Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(10)) == 0;
}if (gdjs.Scene1Code.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(9).sub(1);
}}

}


}; //End of gdjs.Scene1Code.eventsList0x6b06ec
gdjs.Scene1Code.mapOfGDgdjs_46Scene1Code_46GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs.Scene1Code.GDPlayerObjects2});gdjs.Scene1Code.mapOfGDgdjs_46Scene1Code_46GDKeyObjects2Objects = Hashtable.newFrom({"Key": gdjs.Scene1Code.GDKeyObjects2});gdjs.Scene1Code.eventsList0x6b90a4 = function(runtimeScene) {

{


gdjs.Scene1Code.condition0IsTrue_0.val = false;
{
{gdjs.Scene1Code.conditionTrue_1 = gdjs.Scene1Code.condition0IsTrue_0;
gdjs.Scene1Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7050028);
}
}if (gdjs.Scene1Code.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "key.wav", false, 100, 1);
}}

}


}; //End of gdjs.Scene1Code.eventsList0x6b90a4
gdjs.Scene1Code.mapOfGDgdjs_46Scene1Code_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Scene1Code.GDPlayerObjects1});gdjs.Scene1Code.mapOfGDgdjs_46Scene1Code_46GDSlimeObjects1Objects = Hashtable.newFrom({"Slime": gdjs.Scene1Code.GDSlimeObjects1});gdjs.Scene1Code.eventsList0x6b949c = function(runtimeScene) {

{


gdjs.Scene1Code.condition0IsTrue_0.val = false;
{
{gdjs.Scene1Code.conditionTrue_1 = gdjs.Scene1Code.condition0IsTrue_0;
gdjs.Scene1Code.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(7141652);
}
}if (gdjs.Scene1Code.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSound(runtimeScene, "player-death.wav", false, 25, 1);
}}

}


}; //End of gdjs.Scene1Code.eventsList0x6b949c
gdjs.Scene1Code.eventsList0x720c44 = function(runtimeScene) {

{

gdjs.Scene1Code.GDPlayerObjects2.createFrom(runtimeScene.getObjects("Player"));

gdjs.Scene1Code.condition0IsTrue_0.val = false;
gdjs.Scene1Code.condition1IsTrue_0.val = false;
gdjs.Scene1Code.condition2IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Scene1Code.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.Scene1Code.GDPlayerObjects2[i].getBehavior("PlatformerObject").isFalling() ) {
        gdjs.Scene1Code.condition0IsTrue_0.val = true;
        gdjs.Scene1Code.GDPlayerObjects2[k] = gdjs.Scene1Code.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.Scene1Code.GDPlayerObjects2.length = k;}if ( gdjs.Scene1Code.condition0IsTrue_0.val ) {
{
gdjs.Scene1Code.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) == 0;
}if ( gdjs.Scene1Code.condition1IsTrue_0.val ) {
{
gdjs.Scene1Code.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6)) == 0;
}}
}
if (gdjs.Scene1Code.condition2IsTrue_0.val) {
/* Reuse gdjs.Scene1Code.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.Scene1Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Scene1Code.GDPlayerObjects2[i].setAnimationName("Falling");
}
}{runtimeScene.getGame().getVariables().getFromIndex(4).setNumber(0);
}}

}


{

gdjs.Scene1Code.GDPlayerObjects2.createFrom(runtimeScene.getObjects("Player"));

gdjs.Scene1Code.condition0IsTrue_0.val = false;
gdjs.Scene1Code.condition1IsTrue_0.val = false;
gdjs.Scene1Code.condition2IsTrue_0.val = false;
gdjs.Scene1Code.condition3IsTrue_0.val = false;
gdjs.Scene1Code.condition4IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Scene1Code.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.Scene1Code.GDPlayerObjects2[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.Scene1Code.condition0IsTrue_0.val = true;
        gdjs.Scene1Code.GDPlayerObjects2[k] = gdjs.Scene1Code.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.Scene1Code.GDPlayerObjects2.length = k;}if ( gdjs.Scene1Code.condition0IsTrue_0.val ) {
{
gdjs.Scene1Code.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) == 0;
}if ( gdjs.Scene1Code.condition1IsTrue_0.val ) {
{
gdjs.Scene1Code.condition2IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) == 0;
}if ( gdjs.Scene1Code.condition2IsTrue_0.val ) {
{
gdjs.Scene1Code.condition3IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6)) == 0;
}if ( gdjs.Scene1Code.condition3IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Scene1Code.GDPlayerObjects2.length;i<l;++i) {
    if ( !(gdjs.Scene1Code.GDPlayerObjects2[i].isCurrentAnimationName("Dying")) ) {
        gdjs.Scene1Code.condition4IsTrue_0.val = true;
        gdjs.Scene1Code.GDPlayerObjects2[k] = gdjs.Scene1Code.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.Scene1Code.GDPlayerObjects2.length = k;}}
}
}
}
if (gdjs.Scene1Code.condition4IsTrue_0.val) {

{ //Subevents
gdjs.Scene1Code.eventsList0x786e4c(runtimeScene);} //End of subevents
}

}


{


gdjs.Scene1Code.condition0IsTrue_0.val = false;
{
gdjs.Scene1Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) == 1;
}if (gdjs.Scene1Code.condition0IsTrue_0.val) {
gdjs.Scene1Code.GDPlayerObjects2.createFrom(runtimeScene.getObjects("Player"));
{for(var i = 0, len = gdjs.Scene1Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Scene1Code.GDPlayerObjects2[i].setAnimationName("Attacking");
}
}{runtimeScene.getGame().getVariables().getFromIndex(5).setNumber(0);
}
{ //Subevents
gdjs.Scene1Code.eventsList0x7327cc(runtimeScene);} //End of subevents
}

}


{

gdjs.Scene1Code.GDPlayerObjects2.createFrom(runtimeScene.getObjects("Player"));

gdjs.Scene1Code.condition0IsTrue_0.val = false;
gdjs.Scene1Code.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Scene1Code.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.Scene1Code.GDPlayerObjects2[i].isCurrentAnimationName("Attacking") ) {
        gdjs.Scene1Code.condition0IsTrue_0.val = true;
        gdjs.Scene1Code.GDPlayerObjects2[k] = gdjs.Scene1Code.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.Scene1Code.GDPlayerObjects2.length = k;}if ( gdjs.Scene1Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Scene1Code.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.Scene1Code.GDPlayerObjects2[i].hasAnimationEnded() ) {
        gdjs.Scene1Code.condition1IsTrue_0.val = true;
        gdjs.Scene1Code.GDPlayerObjects2[k] = gdjs.Scene1Code.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.Scene1Code.GDPlayerObjects2.length = k;}}
if (gdjs.Scene1Code.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(4).setNumber(0);
}}

}


{

gdjs.Scene1Code.GDPlayerObjects2.createFrom(runtimeScene.getObjects("Player"));

gdjs.Scene1Code.condition0IsTrue_0.val = false;
gdjs.Scene1Code.condition1IsTrue_0.val = false;
gdjs.Scene1Code.condition2IsTrue_0.val = false;
{
gdjs.Scene1Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(4)) == 0;
}if ( gdjs.Scene1Code.condition0IsTrue_0.val ) {
{
gdjs.Scene1Code.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) == 0;
}if ( gdjs.Scene1Code.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Scene1Code.GDPlayerObjects2.length;i<l;++i) {
    if ( !(gdjs.Scene1Code.GDPlayerObjects2[i].isCurrentAnimationName("Dying")) ) {
        gdjs.Scene1Code.condition2IsTrue_0.val = true;
        gdjs.Scene1Code.GDPlayerObjects2[k] = gdjs.Scene1Code.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.Scene1Code.GDPlayerObjects2.length = k;}}
}
if (gdjs.Scene1Code.condition2IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(5).setNumber(1);
}}

}


{


gdjs.Scene1Code.condition0IsTrue_0.val = false;
{
gdjs.Scene1Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) == 1;
}if (gdjs.Scene1Code.condition0IsTrue_0.val) {
gdjs.Scene1Code.GDPlayerObjects2.createFrom(runtimeScene.getObjects("Player"));
{for(var i = 0, len = gdjs.Scene1Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Scene1Code.GDPlayerObjects2[i].setAnimationName("Grappling");
}
}{runtimeScene.getGame().getVariables().getFromIndex(5).setNumber(0);
}}

}


{

gdjs.Scene1Code.GDPlayerObjects2.createFrom(runtimeScene.getObjects("Player"));

gdjs.Scene1Code.condition0IsTrue_0.val = false;
gdjs.Scene1Code.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Scene1Code.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.Scene1Code.GDPlayerObjects2[i].isCurrentAnimationName("Grappling") ) {
        gdjs.Scene1Code.condition0IsTrue_0.val = true;
        gdjs.Scene1Code.GDPlayerObjects2[k] = gdjs.Scene1Code.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.Scene1Code.GDPlayerObjects2.length = k;}if ( gdjs.Scene1Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Scene1Code.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.Scene1Code.GDPlayerObjects2[i].hasAnimationEnded() ) {
        gdjs.Scene1Code.condition1IsTrue_0.val = true;
        gdjs.Scene1Code.GDPlayerObjects2[k] = gdjs.Scene1Code.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.Scene1Code.GDPlayerObjects2.length = k;}}
if (gdjs.Scene1Code.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(3).setNumber(0);
}}

}


{

gdjs.Scene1Code.GDGrapplePointObjects2.createFrom(runtimeScene.getObjects("GrapplePoint"));
gdjs.Scene1Code.GDPlayerObjects2.createFrom(runtimeScene.getObjects("Player"));

gdjs.Scene1Code.condition0IsTrue_0.val = false;
gdjs.Scene1Code.condition1IsTrue_0.val = false;
gdjs.Scene1Code.condition2IsTrue_0.val = false;
gdjs.Scene1Code.condition3IsTrue_0.val = false;
{
gdjs.Scene1Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) == 0;
}if ( gdjs.Scene1Code.condition0IsTrue_0.val ) {
{
gdjs.Scene1Code.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6)) == 1;
}if ( gdjs.Scene1Code.condition1IsTrue_0.val ) {
{
gdjs.Scene1Code.condition2IsTrue_0.val = gdjs.evtTools.object.distanceTest(gdjs.Scene1Code.mapOfGDgdjs_46Scene1Code_46GDPlayerObjects2Objects, gdjs.Scene1Code.mapOfGDgdjs_46Scene1Code_46GDGrapplePointObjects2Objects, 700, false);
}if ( gdjs.Scene1Code.condition2IsTrue_0.val ) {
{
gdjs.Scene1Code.condition3IsTrue_0.val = gdjs.evtTools.object.turnedTowardTest(gdjs.Scene1Code.mapOfGDgdjs_46Scene1Code_46GDPlayerObjects2Objects, gdjs.Scene1Code.mapOfGDgdjs_46Scene1Code_46GDGrapplePointObjects2Objects, 190, false);
}}
}
}
if (gdjs.Scene1Code.condition3IsTrue_0.val) {
/* Reuse gdjs.Scene1Code.GDGrapplePointObjects2 */
/* Reuse gdjs.Scene1Code.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.Scene1Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Scene1Code.GDPlayerObjects2[i].addForceTowardObject((gdjs.Scene1Code.GDGrapplePointObjects2.length !== 0 ? gdjs.Scene1Code.GDGrapplePointObjects2[0] : null), 1000, 0);
}
}{for(var i = 0, len = gdjs.Scene1Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Scene1Code.GDPlayerObjects2[i].setAnimationName("Swinging");
}
}}

}


{

gdjs.Scene1Code.GDGrapplePointObjects2.createFrom(runtimeScene.getObjects("GrapplePoint"));
gdjs.Scene1Code.GDPlayerObjects2.createFrom(runtimeScene.getObjects("Player"));

gdjs.Scene1Code.condition0IsTrue_0.val = false;
{
gdjs.Scene1Code.condition0IsTrue_0.val = gdjs.evtTools.object.distanceTest(gdjs.Scene1Code.mapOfGDgdjs_46Scene1Code_46GDPlayerObjects2Objects, gdjs.Scene1Code.mapOfGDgdjs_46Scene1Code_46GDGrapplePointObjects2Objects, 10, false);
}if (gdjs.Scene1Code.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(6).setNumber(0);
}}

}


{

gdjs.Scene1Code.GDPlayerObjects2.createFrom(runtimeScene.getObjects("Player"));

gdjs.Scene1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Scene1Code.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.Scene1Code.GDPlayerObjects2[i].getY() > 1000 ) {
        gdjs.Scene1Code.condition0IsTrue_0.val = true;
        gdjs.Scene1Code.GDPlayerObjects2[k] = gdjs.Scene1Code.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.Scene1Code.GDPlayerObjects2.length = k;}if (gdjs.Scene1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Scene1Code.GDPlayerObjects2 */
{gdjs.evtTools.camera.setCameraY(runtimeScene, 1000, "", 0);
}{for(var i = 0, len = gdjs.Scene1Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Scene1Code.GDPlayerObjects2[i].unpauseTimer("FallingToDeath");
}
}}

}


{

gdjs.Scene1Code.GDPlayerObjects2.createFrom(runtimeScene.getObjects("Player"));

gdjs.Scene1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Scene1Code.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.Scene1Code.GDPlayerObjects2[i].timerElapsedTime("FallingToDeath", 2) ) {
        gdjs.Scene1Code.condition0IsTrue_0.val = true;
        gdjs.Scene1Code.GDPlayerObjects2[k] = gdjs.Scene1Code.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.Scene1Code.GDPlayerObjects2.length = k;}if (gdjs.Scene1Code.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(1);
}}

}


{

gdjs.Scene1Code.GDPlayerObjects2.createFrom(runtimeScene.getObjects("Player"));

gdjs.Scene1Code.condition0IsTrue_0.val = false;
gdjs.Scene1Code.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Scene1Code.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.Scene1Code.GDPlayerObjects2[i].isCurrentAnimationName("Dying") ) {
        gdjs.Scene1Code.condition0IsTrue_0.val = true;
        gdjs.Scene1Code.GDPlayerObjects2[k] = gdjs.Scene1Code.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.Scene1Code.GDPlayerObjects2.length = k;}if ( gdjs.Scene1Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Scene1Code.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.Scene1Code.GDPlayerObjects2[i].hasAnimationEnded() ) {
        gdjs.Scene1Code.condition1IsTrue_0.val = true;
        gdjs.Scene1Code.GDPlayerObjects2[k] = gdjs.Scene1Code.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.Scene1Code.GDPlayerObjects2.length = k;}}
if (gdjs.Scene1Code.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(1);
}}

}


{

gdjs.Scene1Code.GDCheckpointObjects2.createFrom(runtimeScene.getObjects("Checkpoint"));
gdjs.Scene1Code.GDPlayerObjects2.createFrom(runtimeScene.getObjects("Player"));

gdjs.Scene1Code.condition0IsTrue_0.val = false;
{
gdjs.Scene1Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Scene1Code.mapOfGDgdjs_46Scene1Code_46GDPlayerObjects2Objects, gdjs.Scene1Code.mapOfGDgdjs_46Scene1Code_46GDCheckpointObjects2Objects, false, runtimeScene, false);
}if (gdjs.Scene1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Scene1Code.GDCheckpointObjects2 */
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber((( gdjs.Scene1Code.GDCheckpointObjects2.length === 0 ) ? 0 :gdjs.Scene1Code.GDCheckpointObjects2[0].getPointX("")));
}{runtimeScene.getGame().getVariables().getFromIndex(7).setNumber((( gdjs.Scene1Code.GDCheckpointObjects2.length === 0 ) ? 0 :gdjs.Scene1Code.GDCheckpointObjects2[0].getPointY("")));
}}

}


{

gdjs.Scene1Code.GDPlayerObjects2.createFrom(runtimeScene.getObjects("Player"));

gdjs.Scene1Code.condition0IsTrue_0.val = false;
gdjs.Scene1Code.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Scene1Code.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.Scene1Code.GDPlayerObjects2[i].getBehavior("PlatformerObject").isJumping() ) {
        gdjs.Scene1Code.condition0IsTrue_0.val = true;
        gdjs.Scene1Code.GDPlayerObjects2[k] = gdjs.Scene1Code.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.Scene1Code.GDPlayerObjects2.length = k;}if ( gdjs.Scene1Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Scene1Code.GDPlayerObjects2.length;i<l;++i) {
    if ( !(gdjs.Scene1Code.GDPlayerObjects2[i].getBehavior("PlatformerObject").isFalling()) ) {
        gdjs.Scene1Code.condition1IsTrue_0.val = true;
        gdjs.Scene1Code.GDPlayerObjects2[k] = gdjs.Scene1Code.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.Scene1Code.GDPlayerObjects2.length = k;}}
if (gdjs.Scene1Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Scene1Code.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.Scene1Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Scene1Code.GDPlayerObjects2[i].setAnimationName("Jumping");
}
}{runtimeScene.getGame().getVariables().getFromIndex(4).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(3).setNumber(0);
}
{ //Subevents
gdjs.Scene1Code.eventsList0x6a8ffc(runtimeScene);} //End of subevents
}

}


{


gdjs.Scene1Code.condition0IsTrue_0.val = false;
gdjs.Scene1Code.condition1IsTrue_0.val = false;
{
gdjs.Scene1Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 1;
}if ( gdjs.Scene1Code.condition0IsTrue_0.val ) {
{
gdjs.Scene1Code.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(9)) > 0;
}}
if (gdjs.Scene1Code.condition1IsTrue_0.val) {
gdjs.Scene1Code.GDPlayerObjects2.createFrom(runtimeScene.getObjects("Player"));
{for(var i = 0, len = gdjs.Scene1Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Scene1Code.GDPlayerObjects2[i].deleteFromScene(runtimeScene);
}
}{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(0);
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Scene1Code.mapOfGDgdjs_46Scene1Code_46GDPlayerObjects2Objects, gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)), gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)), "");
}{for(var i = 0, len = gdjs.Scene1Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Scene1Code.GDPlayerObjects2[i].pauseTimer("FallingToDeath");
}
}
{ //Subevents
gdjs.Scene1Code.eventsList0x6b06ec(runtimeScene);} //End of subevents
}

}


{

gdjs.Scene1Code.GDKeyObjects2.createFrom(runtimeScene.getObjects("Key"));
gdjs.Scene1Code.GDPlayerObjects2.createFrom(runtimeScene.getObjects("Player"));

gdjs.Scene1Code.condition0IsTrue_0.val = false;
{
gdjs.Scene1Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Scene1Code.mapOfGDgdjs_46Scene1Code_46GDPlayerObjects2Objects, gdjs.Scene1Code.mapOfGDgdjs_46Scene1Code_46GDKeyObjects2Objects, false, runtimeScene, false);
}if (gdjs.Scene1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Scene1Code.GDKeyObjects2 */
gdjs.Scene1Code.GDKeyUIObjects2.createFrom(runtimeScene.getObjects("KeyUI"));
{for(var i = 0, len = gdjs.Scene1Code.GDKeyObjects2.length ;i < len;++i) {
    gdjs.Scene1Code.GDKeyObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.Scene1Code.GDKeyUIObjects2.length ;i < len;++i) {
    gdjs.Scene1Code.GDKeyUIObjects2[i].hide(false);
}
}
{ //Subevents
gdjs.Scene1Code.eventsList0x6b90a4(runtimeScene);} //End of subevents
}

}


{

gdjs.Scene1Code.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
gdjs.Scene1Code.GDSlimeObjects1.createFrom(runtimeScene.getObjects("Slime"));

gdjs.Scene1Code.condition0IsTrue_0.val = false;
gdjs.Scene1Code.condition1IsTrue_0.val = false;
gdjs.Scene1Code.condition2IsTrue_0.val = false;
gdjs.Scene1Code.condition3IsTrue_0.val = false;
{
gdjs.Scene1Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Scene1Code.mapOfGDgdjs_46Scene1Code_46GDPlayerObjects1Objects, gdjs.Scene1Code.mapOfGDgdjs_46Scene1Code_46GDSlimeObjects1Objects, false, runtimeScene, false);
}if ( gdjs.Scene1Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Scene1Code.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Scene1Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        gdjs.Scene1Code.condition1IsTrue_0.val = true;
        gdjs.Scene1Code.GDPlayerObjects1[k] = gdjs.Scene1Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Scene1Code.GDPlayerObjects1.length = k;}if ( gdjs.Scene1Code.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Scene1Code.GDSlimeObjects1.length;i<l;++i) {
    if ( gdjs.Scene1Code.GDSlimeObjects1[i].getVariableNumber(gdjs.Scene1Code.GDSlimeObjects1[i].getVariables().getFromIndex(1)) == 0 ) {
        gdjs.Scene1Code.condition2IsTrue_0.val = true;
        gdjs.Scene1Code.GDSlimeObjects1[k] = gdjs.Scene1Code.GDSlimeObjects1[i];
        ++k;
    }
}
gdjs.Scene1Code.GDSlimeObjects1.length = k;}if ( gdjs.Scene1Code.condition2IsTrue_0.val ) {
{
gdjs.Scene1Code.condition3IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(10)) == 0;
}}
}
}
if (gdjs.Scene1Code.condition3IsTrue_0.val) {
/* Reuse gdjs.Scene1Code.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.Scene1Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Scene1Code.GDPlayerObjects1[i].setAnimationName("Dying");
}
}{runtimeScene.getGame().getVariables().getFromIndex(5).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(4).setNumber(0);
}
{ //Subevents
gdjs.Scene1Code.eventsList0x6b949c(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.Scene1Code.eventsList0x720c44
gdjs.Scene1Code.mapOfGDgdjs_46Scene1Code_46GDSlimeObjects2Objects = Hashtable.newFrom({"Slime": gdjs.Scene1Code.GDSlimeObjects2});gdjs.Scene1Code.mapOfGDgdjs_46Scene1Code_46GDRightObjects2Objects = Hashtable.newFrom({"Right": gdjs.Scene1Code.GDRightObjects2});gdjs.Scene1Code.mapOfGDgdjs_46Scene1Code_46GDSlimeObjects2Objects = Hashtable.newFrom({"Slime": gdjs.Scene1Code.GDSlimeObjects2});gdjs.Scene1Code.mapOfGDgdjs_46Scene1Code_46GDLeftObjects2Objects = Hashtable.newFrom({"Left": gdjs.Scene1Code.GDLeftObjects2});gdjs.Scene1Code.eventsList0x7d8d44 = function(runtimeScene) {

{

gdjs.Scene1Code.GDSlimeObjects2.createFrom(runtimeScene.getObjects("Slime"));

gdjs.Scene1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Scene1Code.GDSlimeObjects2.length;i<l;++i) {
    if ( gdjs.Scene1Code.GDSlimeObjects2[i].getVariableString(gdjs.Scene1Code.GDSlimeObjects2[i].getVariables().getFromIndex(0)) == "right" ) {
        gdjs.Scene1Code.condition0IsTrue_0.val = true;
        gdjs.Scene1Code.GDSlimeObjects2[k] = gdjs.Scene1Code.GDSlimeObjects2[i];
        ++k;
    }
}
gdjs.Scene1Code.GDSlimeObjects2.length = k;}if (gdjs.Scene1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Scene1Code.GDSlimeObjects2 */
{for(var i = 0, len = gdjs.Scene1Code.GDSlimeObjects2.length ;i < len;++i) {
    gdjs.Scene1Code.GDSlimeObjects2[i].addPolarForce(0, 100, 0);
}
}{for(var i = 0, len = gdjs.Scene1Code.GDSlimeObjects2.length ;i < len;++i) {
    gdjs.Scene1Code.GDSlimeObjects2[i].flipX(true);
}
}}

}


{

gdjs.Scene1Code.GDSlimeObjects2.createFrom(runtimeScene.getObjects("Slime"));

gdjs.Scene1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Scene1Code.GDSlimeObjects2.length;i<l;++i) {
    if ( gdjs.Scene1Code.GDSlimeObjects2[i].getVariableString(gdjs.Scene1Code.GDSlimeObjects2[i].getVariables().getFromIndex(0)) == "left" ) {
        gdjs.Scene1Code.condition0IsTrue_0.val = true;
        gdjs.Scene1Code.GDSlimeObjects2[k] = gdjs.Scene1Code.GDSlimeObjects2[i];
        ++k;
    }
}
gdjs.Scene1Code.GDSlimeObjects2.length = k;}if (gdjs.Scene1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Scene1Code.GDSlimeObjects2 */
{for(var i = 0, len = gdjs.Scene1Code.GDSlimeObjects2.length ;i < len;++i) {
    gdjs.Scene1Code.GDSlimeObjects2[i].addPolarForce(180, 100, 0);
}
}{for(var i = 0, len = gdjs.Scene1Code.GDSlimeObjects2.length ;i < len;++i) {
    gdjs.Scene1Code.GDSlimeObjects2[i].flipX(false);
}
}}

}


{

gdjs.Scene1Code.GDRightObjects2.createFrom(runtimeScene.getObjects("Right"));
gdjs.Scene1Code.GDSlimeObjects2.createFrom(runtimeScene.getObjects("Slime"));

gdjs.Scene1Code.condition0IsTrue_0.val = false;
{
gdjs.Scene1Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Scene1Code.mapOfGDgdjs_46Scene1Code_46GDSlimeObjects2Objects, gdjs.Scene1Code.mapOfGDgdjs_46Scene1Code_46GDRightObjects2Objects, false, runtimeScene, false);
}if (gdjs.Scene1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Scene1Code.GDSlimeObjects2 */
{for(var i = 0, len = gdjs.Scene1Code.GDSlimeObjects2.length ;i < len;++i) {
    gdjs.Scene1Code.GDSlimeObjects2[i].returnVariable(gdjs.Scene1Code.GDSlimeObjects2[i].getVariables().getFromIndex(0)).setString("right");
}
}}

}


{

gdjs.Scene1Code.GDLeftObjects2.createFrom(runtimeScene.getObjects("Left"));
gdjs.Scene1Code.GDSlimeObjects2.createFrom(runtimeScene.getObjects("Slime"));

gdjs.Scene1Code.condition0IsTrue_0.val = false;
{
gdjs.Scene1Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Scene1Code.mapOfGDgdjs_46Scene1Code_46GDSlimeObjects2Objects, gdjs.Scene1Code.mapOfGDgdjs_46Scene1Code_46GDLeftObjects2Objects, false, runtimeScene, false);
}if (gdjs.Scene1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Scene1Code.GDSlimeObjects2 */
{for(var i = 0, len = gdjs.Scene1Code.GDSlimeObjects2.length ;i < len;++i) {
    gdjs.Scene1Code.GDSlimeObjects2[i].returnVariable(gdjs.Scene1Code.GDSlimeObjects2[i].getVariables().getFromIndex(0)).setString("left");
}
}}

}


{

gdjs.Scene1Code.GDSlimeObjects1.createFrom(runtimeScene.getObjects("Slime"));

gdjs.Scene1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Scene1Code.GDSlimeObjects1.length;i<l;++i) {
    if ( gdjs.Scene1Code.GDSlimeObjects1[i].getVariableNumber(gdjs.Scene1Code.GDSlimeObjects1[i].getVariables().getFromIndex(1)) == 1 ) {
        gdjs.Scene1Code.condition0IsTrue_0.val = true;
        gdjs.Scene1Code.GDSlimeObjects1[k] = gdjs.Scene1Code.GDSlimeObjects1[i];
        ++k;
    }
}
gdjs.Scene1Code.GDSlimeObjects1.length = k;}if (gdjs.Scene1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Scene1Code.GDSlimeObjects1 */
{for(var i = 0, len = gdjs.Scene1Code.GDSlimeObjects1.length ;i < len;++i) {
    gdjs.Scene1Code.GDSlimeObjects1[i].setAnimationName("Dying");
}
}{for(var i = 0, len = gdjs.Scene1Code.GDSlimeObjects1.length ;i < len;++i) {
    gdjs.Scene1Code.GDSlimeObjects1[i].clearForces();
}
}}

}


}; //End of gdjs.Scene1Code.eventsList0x7d8d44
gdjs.Scene1Code.mapOfGDgdjs_46Scene1Code_46GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Scene1Code.GDPlayerObjects1});gdjs.Scene1Code.mapOfGDgdjs_46Scene1Code_46GDBoundaryObjects1Objects = Hashtable.newFrom({"Boundary": gdjs.Scene1Code.GDBoundaryObjects1});gdjs.Scene1Code.mapOfGDgdjs_46Scene1Code_46GDBoundaryObjects1Objects = Hashtable.newFrom({"Boundary": gdjs.Scene1Code.GDBoundaryObjects1});gdjs.Scene1Code.eventsList0x5b6e18 = function(runtimeScene) {

{



}


{


{
gdjs.Scene1Code.GDFPSCounterObjects1.createFrom(runtimeScene.getObjects("FPSCounter"));
gdjs.Scene1Code.GDLivesCounterObjects1.createFrom(runtimeScene.getObjects("LivesCounter"));
gdjs.Scene1Code.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
{for(var i = 0, len = gdjs.Scene1Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Scene1Code.GDPlayerObjects1[i].setScale(2);
}
}{for(var i = 0, len = gdjs.Scene1Code.GDFPSCounterObjects1.length ;i < len;++i) {
    gdjs.Scene1Code.GDFPSCounterObjects1[i].setString("FPS: " + gdjs.evtTools.common.toString(Math.round(1 / gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene))));
}
}{for(var i = 0, len = gdjs.Scene1Code.GDLivesCounterObjects1.length ;i < len;++i) {
    gdjs.Scene1Code.GDLivesCounterObjects1[i].setString("Lives: " + gdjs.evtTools.common.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(9)));
}
}}

}


{


gdjs.Scene1Code.condition0IsTrue_0.val = false;
{
gdjs.Scene1Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Scene1Code.condition0IsTrue_0.val) {
gdjs.Scene1Code.GDFPSCounterObjects1.createFrom(runtimeScene.getObjects("FPSCounter"));
gdjs.Scene1Code.GDGameOverPopupObjects1.createFrom(runtimeScene.getObjects("GameOverPopup"));
gdjs.Scene1Code.GDGameOverTipObjects1.createFrom(runtimeScene.getObjects("GameOverTip"));
gdjs.Scene1Code.GDKeyUIObjects1.createFrom(runtimeScene.getObjects("KeyUI"));
gdjs.Scene1Code.GDLeftObjects1.createFrom(runtimeScene.getObjects("Left"));
gdjs.Scene1Code.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
gdjs.Scene1Code.GDRightObjects1.createFrom(runtimeScene.getObjects("Right"));
{for(var i = 0, len = gdjs.Scene1Code.GDLeftObjects1.length ;i < len;++i) {
    gdjs.Scene1Code.GDLeftObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Scene1Code.GDRightObjects1.length ;i < len;++i) {
    gdjs.Scene1Code.GDRightObjects1[i].hide();
}
}{gdjs.evtTools.runtimeScene.pauseTimer(runtimeScene, "Respawn");
}{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber((( gdjs.Scene1Code.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Scene1Code.GDPlayerObjects1[0].getPointX("")));
}{runtimeScene.getGame().getVariables().getFromIndex(7).setNumber((( gdjs.Scene1Code.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Scene1Code.GDPlayerObjects1[0].getPointY("")));
}{gdjs.evtTools.input.hideCursor(runtimeScene);
}{for(var i = 0, len = gdjs.Scene1Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Scene1Code.GDPlayerObjects1[i].pauseTimer("FallingToDeath");
}
}{for(var i = 0, len = gdjs.Scene1Code.GDFPSCounterObjects1.length ;i < len;++i) {
    gdjs.Scene1Code.GDFPSCounterObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Scene1Code.GDGameOverPopupObjects1.length ;i < len;++i) {
    gdjs.Scene1Code.GDGameOverPopupObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Scene1Code.GDGameOverTipObjects1.length ;i < len;++i) {
    gdjs.Scene1Code.GDGameOverTipObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Scene1Code.GDKeyUIObjects1.length ;i < len;++i) {
    gdjs.Scene1Code.GDKeyUIObjects1[i].hide();
}
}}

}


{


gdjs.Scene1Code.condition0IsTrue_0.val = false;
gdjs.Scene1Code.condition1IsTrue_0.val = false;
{
gdjs.Scene1Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 1;
}if ( gdjs.Scene1Code.condition0IsTrue_0.val ) {
{
gdjs.Scene1Code.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(9)) == 0;
}}
if (gdjs.Scene1Code.condition1IsTrue_0.val) {
gdjs.Scene1Code.GDGameOverPopupObjects1.createFrom(runtimeScene.getObjects("GameOverPopup"));
{for(var i = 0, len = gdjs.Scene1Code.GDGameOverPopupObjects1.length ;i < len;++i) {
    gdjs.Scene1Code.GDGameOverPopupObjects1[i].hide(false);
}
}{gdjs.evtTools.input.showCursor(runtimeScene);
}}

}


{


gdjs.Scene1Code.eventsList0x686e4c(runtimeScene);
}


{


gdjs.Scene1Code.eventsList0x720c44(runtimeScene);
}


{


gdjs.Scene1Code.eventsList0x7d8d44(runtimeScene);
}


{


{
gdjs.Scene1Code.GDBoundaryObjects1.createFrom(runtimeScene.getObjects("Boundary"));
gdjs.Scene1Code.GDSlimeObjects1.createFrom(runtimeScene.getObjects("Slime"));
{for(var i = 0, len = gdjs.Scene1Code.GDSlimeObjects1.length ;i < len;++i) {
    gdjs.Scene1Code.GDSlimeObjects1[i].setScale(3);
}
}{for(var i = 0, len = gdjs.Scene1Code.GDBoundaryObjects1.length ;i < len;++i) {
    gdjs.Scene1Code.GDBoundaryObjects1[i].hide();
}
}}

}


{


gdjs.Scene1Code.condition0IsTrue_0.val = false;
{
gdjs.Scene1Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Scene1Code.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "scene1-music.mp3", 0, true, 25, 1);
}}

}


{

gdjs.Scene1Code.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));

gdjs.Scene1Code.condition0IsTrue_0.val = false;
gdjs.Scene1Code.condition1IsTrue_0.val = false;
{
gdjs.Scene1Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(2)) == 0;
}if ( gdjs.Scene1Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Scene1Code.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Scene1Code.GDPlayerObjects1[i].getY() <= 1000 ) {
        gdjs.Scene1Code.condition1IsTrue_0.val = true;
        gdjs.Scene1Code.GDPlayerObjects1[k] = gdjs.Scene1Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Scene1Code.GDPlayerObjects1.length = k;}}
if (gdjs.Scene1Code.condition1IsTrue_0.val) {
/* Reuse gdjs.Scene1Code.GDPlayerObjects1 */
{gdjs.evtTools.camera.centerCameraWithinLimits(runtimeScene, (gdjs.Scene1Code.GDPlayerObjects1.length !== 0 ? gdjs.Scene1Code.GDPlayerObjects1[0] : null), -(5834), -(100000), 2891, 100000, true, "", 0);
}}

}


{

gdjs.Scene1Code.GDBoundaryObjects1.createFrom(runtimeScene.getObjects("Boundary"));
gdjs.Scene1Code.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));

gdjs.Scene1Code.condition0IsTrue_0.val = false;
{
gdjs.Scene1Code.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Scene1Code.mapOfGDgdjs_46Scene1Code_46GDPlayerObjects1Objects, gdjs.Scene1Code.mapOfGDgdjs_46Scene1Code_46GDBoundaryObjects1Objects, false, runtimeScene, false);
}if (gdjs.Scene1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Scene1Code.GDBoundaryObjects1 */
/* Reuse gdjs.Scene1Code.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.Scene1Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Scene1Code.GDPlayerObjects1[i].separateFromObjectsList(gdjs.Scene1Code.mapOfGDgdjs_46Scene1Code_46GDBoundaryObjects1Objects, false);
}
}}

}


{

gdjs.Scene1Code.GDCastleTowerOuterObjects1.createFrom(runtimeScene.getObjects("CastleTowerOuter"));
gdjs.Scene1Code.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));

gdjs.Scene1Code.condition0IsTrue_0.val = false;
gdjs.Scene1Code.condition1IsTrue_0.val = false;
gdjs.Scene1Code.condition2IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Scene1Code.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Scene1Code.GDPlayerObjects1[i].getX() > (( gdjs.Scene1Code.GDCastleTowerOuterObjects1.length === 0 ) ? 0 :gdjs.Scene1Code.GDCastleTowerOuterObjects1[0].getX()) ) {
        gdjs.Scene1Code.condition0IsTrue_0.val = true;
        gdjs.Scene1Code.GDPlayerObjects1[k] = gdjs.Scene1Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Scene1Code.GDPlayerObjects1.length = k;}if ( gdjs.Scene1Code.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Scene1Code.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Scene1Code.GDPlayerObjects1[i].getX() < (( gdjs.Scene1Code.GDCastleTowerOuterObjects1.length === 0 ) ? 0 :gdjs.Scene1Code.GDCastleTowerOuterObjects1[0].getX()) + (( gdjs.Scene1Code.GDCastleTowerOuterObjects1.length === 0 ) ? 0 :gdjs.Scene1Code.GDCastleTowerOuterObjects1[0].getWidth()) ) {
        gdjs.Scene1Code.condition1IsTrue_0.val = true;
        gdjs.Scene1Code.GDPlayerObjects1[k] = gdjs.Scene1Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Scene1Code.GDPlayerObjects1.length = k;}if ( gdjs.Scene1Code.condition1IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Scene1Code.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Scene1Code.GDPlayerObjects1[i].getY() > (( gdjs.Scene1Code.GDCastleTowerOuterObjects1.length === 0 ) ? 0 :gdjs.Scene1Code.GDCastleTowerOuterObjects1[0].getY()) ) {
        gdjs.Scene1Code.condition2IsTrue_0.val = true;
        gdjs.Scene1Code.GDPlayerObjects1[k] = gdjs.Scene1Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Scene1Code.GDPlayerObjects1.length = k;}}
}
if (gdjs.Scene1Code.condition2IsTrue_0.val) {
/* Reuse gdjs.Scene1Code.GDCastleTowerOuterObjects1 */
{for(var i = 0, len = gdjs.Scene1Code.GDCastleTowerOuterObjects1.length ;i < len;++i) {
    gdjs.Scene1Code.GDCastleTowerOuterObjects1[i].setOpacity(gdjs.Scene1Code.GDCastleTowerOuterObjects1[i].getOpacity() - (5));
}
}}

}


{

gdjs.Scene1Code.GDCastleTowerOuterObjects1.createFrom(runtimeScene.getObjects("CastleTowerOuter"));
gdjs.Scene1Code.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));

gdjs.Scene1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Scene1Code.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Scene1Code.GDPlayerObjects1[i].getX() < (( gdjs.Scene1Code.GDCastleTowerOuterObjects1.length === 0 ) ? 0 :gdjs.Scene1Code.GDCastleTowerOuterObjects1[0].getX()) ) {
        gdjs.Scene1Code.condition0IsTrue_0.val = true;
        gdjs.Scene1Code.GDPlayerObjects1[k] = gdjs.Scene1Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Scene1Code.GDPlayerObjects1.length = k;}if (gdjs.Scene1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Scene1Code.GDCastleTowerOuterObjects1 */
{for(var i = 0, len = gdjs.Scene1Code.GDCastleTowerOuterObjects1.length ;i < len;++i) {
    gdjs.Scene1Code.GDCastleTowerOuterObjects1[i].setOpacity(gdjs.Scene1Code.GDCastleTowerOuterObjects1[i].getOpacity() + (5));
}
}}

}


{

gdjs.Scene1Code.GDCastleTowerOuterObjects1.createFrom(runtimeScene.getObjects("CastleTowerOuter"));
gdjs.Scene1Code.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));

gdjs.Scene1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Scene1Code.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Scene1Code.GDPlayerObjects1[i].getX() > (( gdjs.Scene1Code.GDCastleTowerOuterObjects1.length === 0 ) ? 0 :gdjs.Scene1Code.GDCastleTowerOuterObjects1[0].getX()) + (( gdjs.Scene1Code.GDCastleTowerOuterObjects1.length === 0 ) ? 0 :gdjs.Scene1Code.GDCastleTowerOuterObjects1[0].getWidth()) ) {
        gdjs.Scene1Code.condition0IsTrue_0.val = true;
        gdjs.Scene1Code.GDPlayerObjects1[k] = gdjs.Scene1Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Scene1Code.GDPlayerObjects1.length = k;}if (gdjs.Scene1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Scene1Code.GDCastleTowerOuterObjects1 */
{for(var i = 0, len = gdjs.Scene1Code.GDCastleTowerOuterObjects1.length ;i < len;++i) {
    gdjs.Scene1Code.GDCastleTowerOuterObjects1[i].setOpacity(gdjs.Scene1Code.GDCastleTowerOuterObjects1[i].getOpacity() + (5));
}
}}

}


{

gdjs.Scene1Code.GDCastleTowerOuterObjects1.createFrom(runtimeScene.getObjects("CastleTowerOuter"));
gdjs.Scene1Code.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));

gdjs.Scene1Code.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Scene1Code.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Scene1Code.GDPlayerObjects1[i].getY() < (( gdjs.Scene1Code.GDCastleTowerOuterObjects1.length === 0 ) ? 0 :gdjs.Scene1Code.GDCastleTowerOuterObjects1[0].getY()) ) {
        gdjs.Scene1Code.condition0IsTrue_0.val = true;
        gdjs.Scene1Code.GDPlayerObjects1[k] = gdjs.Scene1Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Scene1Code.GDPlayerObjects1.length = k;}if (gdjs.Scene1Code.condition0IsTrue_0.val) {
/* Reuse gdjs.Scene1Code.GDCastleTowerOuterObjects1 */
{for(var i = 0, len = gdjs.Scene1Code.GDCastleTowerOuterObjects1.length ;i < len;++i) {
    gdjs.Scene1Code.GDCastleTowerOuterObjects1[i].setOpacity(gdjs.Scene1Code.GDCastleTowerOuterObjects1[i].getOpacity() + (5));
}
}}

}


}; //End of gdjs.Scene1Code.eventsList0x5b6e18


gdjs.Scene1Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Scene1Code.GDPlayerObjects1.length = 0;
gdjs.Scene1Code.GDPlayerObjects2.length = 0;
gdjs.Scene1Code.GDPlayerObjects3.length = 0;
gdjs.Scene1Code.GDPlayerObjects4.length = 0;
gdjs.Scene1Code.GDGrapplePointObjects1.length = 0;
gdjs.Scene1Code.GDGrapplePointObjects2.length = 0;
gdjs.Scene1Code.GDGrapplePointObjects3.length = 0;
gdjs.Scene1Code.GDGrapplePointObjects4.length = 0;
gdjs.Scene1Code.GDCheckpointObjects1.length = 0;
gdjs.Scene1Code.GDCheckpointObjects2.length = 0;
gdjs.Scene1Code.GDCheckpointObjects3.length = 0;
gdjs.Scene1Code.GDCheckpointObjects4.length = 0;
gdjs.Scene1Code.GDLeftObjects1.length = 0;
gdjs.Scene1Code.GDLeftObjects2.length = 0;
gdjs.Scene1Code.GDLeftObjects3.length = 0;
gdjs.Scene1Code.GDLeftObjects4.length = 0;
gdjs.Scene1Code.GDSlimeObjects1.length = 0;
gdjs.Scene1Code.GDSlimeObjects2.length = 0;
gdjs.Scene1Code.GDSlimeObjects3.length = 0;
gdjs.Scene1Code.GDSlimeObjects4.length = 0;
gdjs.Scene1Code.GDRightObjects1.length = 0;
gdjs.Scene1Code.GDRightObjects2.length = 0;
gdjs.Scene1Code.GDRightObjects3.length = 0;
gdjs.Scene1Code.GDRightObjects4.length = 0;
gdjs.Scene1Code.GDFPSCounterObjects1.length = 0;
gdjs.Scene1Code.GDFPSCounterObjects2.length = 0;
gdjs.Scene1Code.GDFPSCounterObjects3.length = 0;
gdjs.Scene1Code.GDFPSCounterObjects4.length = 0;
gdjs.Scene1Code.GDLivesCounterObjects1.length = 0;
gdjs.Scene1Code.GDLivesCounterObjects2.length = 0;
gdjs.Scene1Code.GDLivesCounterObjects3.length = 0;
gdjs.Scene1Code.GDLivesCounterObjects4.length = 0;
gdjs.Scene1Code.GDGameOverPopupObjects1.length = 0;
gdjs.Scene1Code.GDGameOverPopupObjects2.length = 0;
gdjs.Scene1Code.GDGameOverPopupObjects3.length = 0;
gdjs.Scene1Code.GDGameOverPopupObjects4.length = 0;
gdjs.Scene1Code.GDBoundaryObjects1.length = 0;
gdjs.Scene1Code.GDBoundaryObjects2.length = 0;
gdjs.Scene1Code.GDBoundaryObjects3.length = 0;
gdjs.Scene1Code.GDBoundaryObjects4.length = 0;
gdjs.Scene1Code.GDCastlePlatformTopObjects1.length = 0;
gdjs.Scene1Code.GDCastlePlatformTopObjects2.length = 0;
gdjs.Scene1Code.GDCastlePlatformTopObjects3.length = 0;
gdjs.Scene1Code.GDCastlePlatformTopObjects4.length = 0;
gdjs.Scene1Code.GDCastlePlatformLowerObjects1.length = 0;
gdjs.Scene1Code.GDCastlePlatformLowerObjects2.length = 0;
gdjs.Scene1Code.GDCastlePlatformLowerObjects3.length = 0;
gdjs.Scene1Code.GDCastlePlatformLowerObjects4.length = 0;
gdjs.Scene1Code.GDCastleTowerInnerObjects1.length = 0;
gdjs.Scene1Code.GDCastleTowerInnerObjects2.length = 0;
gdjs.Scene1Code.GDCastleTowerInnerObjects3.length = 0;
gdjs.Scene1Code.GDCastleTowerInnerObjects4.length = 0;
gdjs.Scene1Code.GDCastleTowerOuterObjects1.length = 0;
gdjs.Scene1Code.GDCastleTowerOuterObjects2.length = 0;
gdjs.Scene1Code.GDCastleTowerOuterObjects3.length = 0;
gdjs.Scene1Code.GDCastleTowerOuterObjects4.length = 0;
gdjs.Scene1Code.GDGameOverTipObjects1.length = 0;
gdjs.Scene1Code.GDGameOverTipObjects2.length = 0;
gdjs.Scene1Code.GDGameOverTipObjects3.length = 0;
gdjs.Scene1Code.GDGameOverTipObjects4.length = 0;
gdjs.Scene1Code.GDKeyObjects1.length = 0;
gdjs.Scene1Code.GDKeyObjects2.length = 0;
gdjs.Scene1Code.GDKeyObjects3.length = 0;
gdjs.Scene1Code.GDKeyObjects4.length = 0;
gdjs.Scene1Code.GDKeyUIObjects1.length = 0;
gdjs.Scene1Code.GDKeyUIObjects2.length = 0;
gdjs.Scene1Code.GDKeyUIObjects3.length = 0;
gdjs.Scene1Code.GDKeyUIObjects4.length = 0;
gdjs.Scene1Code.GDDoorObjects1.length = 0;
gdjs.Scene1Code.GDDoorObjects2.length = 0;
gdjs.Scene1Code.GDDoorObjects3.length = 0;
gdjs.Scene1Code.GDDoorObjects4.length = 0;

gdjs.Scene1Code.eventsList0x5b6e18(runtimeScene);
return;

}

gdjs['Scene1Code'] = gdjs.Scene1Code;
