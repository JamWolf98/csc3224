gdjs.MenuCode = {};
gdjs.MenuCode.GDPlayerObjects1= [];
gdjs.MenuCode.GDPlayerObjects2= [];
gdjs.MenuCode.GDGrapplePointObjects1= [];
gdjs.MenuCode.GDGrapplePointObjects2= [];
gdjs.MenuCode.GDCheckpointObjects1= [];
gdjs.MenuCode.GDCheckpointObjects2= [];
gdjs.MenuCode.GDLeftObjects1= [];
gdjs.MenuCode.GDLeftObjects2= [];
gdjs.MenuCode.GDSlimeObjects1= [];
gdjs.MenuCode.GDSlimeObjects2= [];
gdjs.MenuCode.GDRightObjects1= [];
gdjs.MenuCode.GDRightObjects2= [];
gdjs.MenuCode.GDFPSCounterObjects1= [];
gdjs.MenuCode.GDFPSCounterObjects2= [];
gdjs.MenuCode.GDLivesCounterObjects1= [];
gdjs.MenuCode.GDLivesCounterObjects2= [];
gdjs.MenuCode.GDGameOverPopupObjects1= [];
gdjs.MenuCode.GDGameOverPopupObjects2= [];
gdjs.MenuCode.GDBoundaryObjects1= [];
gdjs.MenuCode.GDBoundaryObjects2= [];
gdjs.MenuCode.GDMenuTextObjects1= [];
gdjs.MenuCode.GDMenuTextObjects2= [];
gdjs.MenuCode.GDPlatformObjects1= [];
gdjs.MenuCode.GDPlatformObjects2= [];
gdjs.MenuCode.GDControlsTextObjects1= [];
gdjs.MenuCode.GDControlsTextObjects2= [];

gdjs.MenuCode.conditionTrue_0 = {val:false};
gdjs.MenuCode.condition0IsTrue_0 = {val:false};
gdjs.MenuCode.condition1IsTrue_0 = {val:false};


gdjs.MenuCode.eventsList0x68d50c = function(runtimeScene) {

{


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "w"));
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Scene1", true);
}}

}


}; //End of gdjs.MenuCode.eventsList0x68d50c
gdjs.MenuCode.eventsList0x5b6e18 = function(runtimeScene) {

{


{
gdjs.MenuCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
{for(var i = 0, len = gdjs.MenuCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.MenuCode.GDPlayerObjects1[i].setScale(2);
}
}}

}


{


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.anyKeyPressed(runtimeScene);
}if (gdjs.MenuCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.MenuCode.eventsList0x68d50c(runtimeScene);} //End of subevents
}

}


{


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Scene1", true);
}}

}


{


gdjs.MenuCode.condition0IsTrue_0.val = false;
{
gdjs.MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Right");
}if (gdjs.MenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Scene1", true);
}}

}


}; //End of gdjs.MenuCode.eventsList0x5b6e18


gdjs.MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MenuCode.GDPlayerObjects1.length = 0;
gdjs.MenuCode.GDPlayerObjects2.length = 0;
gdjs.MenuCode.GDGrapplePointObjects1.length = 0;
gdjs.MenuCode.GDGrapplePointObjects2.length = 0;
gdjs.MenuCode.GDCheckpointObjects1.length = 0;
gdjs.MenuCode.GDCheckpointObjects2.length = 0;
gdjs.MenuCode.GDLeftObjects1.length = 0;
gdjs.MenuCode.GDLeftObjects2.length = 0;
gdjs.MenuCode.GDSlimeObjects1.length = 0;
gdjs.MenuCode.GDSlimeObjects2.length = 0;
gdjs.MenuCode.GDRightObjects1.length = 0;
gdjs.MenuCode.GDRightObjects2.length = 0;
gdjs.MenuCode.GDFPSCounterObjects1.length = 0;
gdjs.MenuCode.GDFPSCounterObjects2.length = 0;
gdjs.MenuCode.GDLivesCounterObjects1.length = 0;
gdjs.MenuCode.GDLivesCounterObjects2.length = 0;
gdjs.MenuCode.GDGameOverPopupObjects1.length = 0;
gdjs.MenuCode.GDGameOverPopupObjects2.length = 0;
gdjs.MenuCode.GDBoundaryObjects1.length = 0;
gdjs.MenuCode.GDBoundaryObjects2.length = 0;
gdjs.MenuCode.GDMenuTextObjects1.length = 0;
gdjs.MenuCode.GDMenuTextObjects2.length = 0;
gdjs.MenuCode.GDPlatformObjects1.length = 0;
gdjs.MenuCode.GDPlatformObjects2.length = 0;
gdjs.MenuCode.GDControlsTextObjects1.length = 0;
gdjs.MenuCode.GDControlsTextObjects2.length = 0;

gdjs.MenuCode.eventsList0x5b6e18(runtimeScene);
return;

}

gdjs['MenuCode'] = gdjs.MenuCode;
