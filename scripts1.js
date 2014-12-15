function AlumnosController($scope){
	$scope.alumnos=[
		{nombre: "Juan Blanco", telefono: "7158496", curso: "Primero ESO"},
		{nombre: "David Perez", telefono: "7485710", curso: "Segundo ESO"}
	]

	$scope.Save=function(){
		$scope.alumnos.push(
				{nombre:$scope.nuevoAlumno.nombre,
				 telefono:$scope.nuevoAlumno.telefono,
				 curso:$scope.nuevoAlumno.curso
				}
		);
		$scope.formVisibility = false;
		console.log($scope.formVisibility);
	}

	$scope.formVisibility = false;

	$scope.ShowForm=function(){
		$scope.formVisibility = true;
		console.log($scope.formVisibility);
	}
}
