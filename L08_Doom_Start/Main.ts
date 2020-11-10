namespace main {

    export let viewport: fc.Viewport;
    import fc = FudgeCore;

    window.addEventListener("load", hndLoad);

    let root: fc.Node = new fc.Node("Root");
    let floor: fc.Node = new fc.Node("Floor");
    let wall: fc.Node = new fc.Node("Wall");

    hndLoad();

    function hndLoad(): void {

        const canvas: HTMLCanvasElement = document.querySelector("canvas");

        let cmpCamera: fc.ComponentCamera = new fc.ComponentCamera();
        cmpCamera.pivot.translateZ(5);
        cmpCamera.pivot.translateY(1);
        cmpCamera.pivot.rotateY(180);

        viewport = new fc.Viewport();
        viewport.initialize("Viewport", root, cmpCamera, canvas);

        floor = new fc.Node("Quad");
        wall = new fc.Node("Quad");
        root.addChild(floor);
        root.addChild(wall);

        //Floor
        let floorMesh: fc.MeshQuad = new fc.MeshQuad();
        let cmpFloorMesh: fc.ComponentMesh = new fc.ComponentMesh(floorMesh);
        cmpFloorMesh.pivot.rotateX(-90);
        cmpFloorMesh.pivot.scale(new fc.Vector3(5, 5, 5));
        floor.addComponent(cmpFloorMesh);

        let mtrFloorColor: fc.Material = new fc.Material("FloorColor", fc.ShaderUniColor, new fc.CoatColored(fc.Color.CSS("ORANGE")));
        let cmpFloorMaterial: fc.ComponentMaterial = new fc.ComponentMaterial(mtrFloorColor);
        floor.addComponent(cmpFloorMaterial);

        //Wall
        let wallMesh: fc.MeshQuad = new fc.MeshQuad();
        let cmpWallMesh: fc.ComponentMesh = new fc.ComponentMesh(wallMesh);
        cmpWallMesh.pivot.scale(new fc.Vector3(17, 15, 5));
        cmpWallMesh.pivot.translateZ(-4);
        wall.addComponent(cmpWallMesh);

        let mtrWallColor: fc.Material = new fc.Material("FloorColor", fc.ShaderUniColor, new fc.CoatColored(fc.Color.CSS("BLUE")));
        let cmpWallMaterial: fc.ComponentMaterial = new fc.ComponentMaterial(mtrWallColor);
        wall.addComponent(cmpWallMaterial);
    
        viewport.draw();

    }

}