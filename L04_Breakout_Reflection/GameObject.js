"use strict";
var L04_BreakoutReflection;
(function (L04_BreakoutReflection) {
    var fc = FudgeCore;
    let GameObject = /** @class */ (() => {
        class GameObject extends fc.Node {
            constructor(_name, _position, _size) {
                super(_name);
                this.rect = new fc.Rectangle(_position.x, _position.y, _size.x, _size.y, fc.ORIGIN2D.CENTER);
                this.addComponent(new fc.ComponentTransform(fc.Matrix4x4.TRANSLATION(_position.toVector3(0))));
                let cmpBall = new fc.ComponentMesh(GameObject.meshQuad);
                this.addComponent(cmpBall);
                cmpBall.pivot.scale(_size.toVector3(0));
                let cMaterial = new fc.ComponentMaterial(GameObject.mtrSolidWhite);
                this.addComponent(cMaterial);
            }
        }
        GameObject.mtrSolidWhite = new fc.Material("SolidWhite", fc.ShaderUniColor, new fc.CoatColored(fc.Color.CSS("WHITE")));
        GameObject.meshQuad = new fc.MeshQuad();
        return GameObject;
    })();
    L04_BreakoutReflection.GameObject = GameObject;
})(L04_BreakoutReflection || (L04_BreakoutReflection = {}));
//# sourceMappingURL=GameObject.js.map