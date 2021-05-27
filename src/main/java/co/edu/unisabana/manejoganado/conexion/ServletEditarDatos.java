package co.edu.unisabana.manejoganado.conexion;

import co.edu.unisabana.manejoganado.FireStore;
import com.google.gson.Gson;
import com.google.gson.JsonObject;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class ServletEditarDatos extends HttpServlet {

    private FireStore gestorDatos = new FireStore();
    
    private void enviarRespuesta(HttpServletResponse response, String codigoRespuesta) throws IOException {
        try ( PrintWriter out = response.getWriter()) {
            response.setContentType("application/json");
            response.setCharacterEncoding("UTF-8");
            out.print(codigoRespuesta);
            out.flush();
        }
    }
    
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        
        BufferedReader br = new BufferedReader(new InputStreamReader(request.getInputStream()));
        String datosJson = br.readLine();

        Gson gson = new Gson();
        JsonObject datos = gson.fromJson(datosJson, JsonObject.class);

        String usuario = datos.get("usuario").getAsString();
        String codigo = datos.get("codigo").getAsString();
        String nombre = datos.get("nombre").getAsString();
        String edad = datos.get("edad").getAsString();
        String listaDias = datos.get("listaDias").getAsString();
        String listaLeche = datos.get("listaLeche").getAsString();
        String promedioLeche = datos.get("promedioLeche").getAsString();
        String corral = datos.get("corral").getAsString();
        String codigoMadre = datos.get("codigoMadre").getAsString();

        String codigoRespuesta = gestorDatos.actualizarDatos(usuario, codigo, nombre, edad, listaDias, listaLeche, promedioLeche, corral, codigoMadre);
        enviarRespuesta(response, codigoRespuesta);
    }

    // <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}