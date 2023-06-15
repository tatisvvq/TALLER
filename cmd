cmd
@ECO desactivado _ 
IR  A inicio
: encontrar_dp0
ESTABLECER  dp0 = %~dp0
SALIR /b
: empezar
ESTABLECER LOCAL
LLAMADA : find_dp0

SI  EXISTE  " %dp0% \node.exe " (
  CONFIGURAR  " _prog = %dp0% \node.exe "
) MÁS (
  SET  " _prog = nodo "
  ESTABLECER  PATHEXT = %PATHEXT: ;.JS; = ; %
)

endLocal  &  ir a #_undefined_# 2 > NUL  ||  título  %COMSPEC%  &  " %_prog% "   " %dp0% \..\esbuild\bin\esbuild "  %*
