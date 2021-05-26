package co.edu.unisabana.manejoganado;

import com.google.api.core.ApiFuture;
import com.google.auth.oauth2.GoogleCredentials;
import com.google.cloud.firestore.Firestore;
import com.google.cloud.firestore.QueryDocumentSnapshot;
import com.google.cloud.firestore.QuerySnapshot;
import com.google.firebase.FirebaseApp;
import com.google.firebase.FirebaseOptions;
import com.google.firebase.cloud.FirestoreClient;
import java.io.ByteArrayInputStream;
import java.io.InputStream;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;
import java.util.logging.Level;
import java.util.logging.Logger;
import org.apache.commons.lang3.StringUtils;
import org.json.JSONObject;

public class FireStore {

    private boolean iniciadoPreviamente;

    public FireStore() {
    }

    private String generarCodigo() {
        UUID codigoUnico = UUID.randomUUID();
        String codigoString = codigoUnico.toString();
        String codigo = StringUtils.substringBefore(codigoString, "-");
        return codigo;
    }

    private JSONObject credencialesSDK() {
        JSONObject credencialesSDK = new JSONObject();
        credencialesSDK.put("type", "service_account");
        credencialesSDK.put("project_id", "manejo-de-ganado");
        credencialesSDK.put("private_key_id", "a2da276644cb8cf60cd3ab01c64e628c201d6057");
        credencialesSDK.put("private_key", "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC0Op7c8ZxYddUq\nkHqk4QVjIG9g2AOVr0fq8wsLxqKigOxCIhgZ0NNHNn1/JIAy4Ly6Ik6ZfY/Qu0PD\nCpERqCloxJ3i7SUsJfZvG/QbXydlTI4edNsnB2unzD9WM9jlpy1fOCLGIGHF8wGg\nQmj9mj3+FT780mCoN8TLXdd6Am6ivzbR0sJB1vV1fNUzkQxdFHNBWoUyU69+MIFa\nnGVZVJ93yrJRlGfDWs8uQUn/4Ey+xRkXT80C+OHeju26eOO5UhUb4IrM7u/k5qI7\n0geudAwwxWy5jdiPvXhDXfRodE4ENTJEFFt9rlOltHlvkI6QOdRhJdg7OQUb3SF2\nwDx/w3MLAgMBAAECggEARaGATwxpwyODP/ah66GkWy/k2B2dBO+7cWKFGf+cRfxZ\nSxOxDAhKGHFM+xo3DXEWeTNX+qUwMwymmWwzsAawOPH9rfbBLdVc6IB8Rzb0GYcC\nQXIUWXfcd+/JaJyPZ+q29NrTVIiePcQtFKWTuqck3E2JEFSXU2Z4ebm/zjuyUt23\nMLaUo27C1g3L6T9G/sYWm/slL/8a1WXW4B5Bz2D9O0q2dXKm8NbbsLIQQtqLTtsj\ntxSTFIqhkWnjNPVah6K+DC/YOmlZeOBHc7RFKBpxJCdYpzngTMLGPsFe7V9cOZQI\ntmEQ0a0uqSLKlBpEjAoc03PV1Ns51D/sfo8Ubd8VgQKBgQDir2Wb4IoS4I4i2YWk\nKP4I6iwzFwBosR+IXhubUVeibfgWOkJMdY/3MdnKhcHb2ZdWQZYhfrGIasMywNXy\npYbaB8MfMKtUMRSl+tzgXOPPQ6akZzKbRKQaSVDotZj+FbjDUwHFdSYa9286L+Ip\njB2c6/u8M9eLkWZGhNtmF90D4wKBgQDLiUDaFeGmRiTzT9IjY+t9+X+tzFalJd7x\nUqyb82pMQxbwiHeXwAYWHCJAQaIPF2yAZ/Y7E2MH9eeCC0OAwkopiZSuPI/DJtIQ\nHHDmAB3avxeJAOFFJye78wSThEjQXfFJ30KPDK1syZhHL8dhotHLQjNRPnPZUEpc\ndOQUUD8MuQKBgCzoIFHz9oZs09uVigMOV9z+PwlT+jHDPQLv2bo4MAsui+IjYnTx\nKTcIOiQDwXbDMVbWIV67UYI73DWWvAuYvRE+TmpEYvyHyJZlDxKndD3gIggZpY3a\n2EOY2J1xNEDJntObAxPR9F2NPQyi5cPjTQ6ENVeAUagFguRfd3NPMOqPAoGAc9EK\nIg7Jc//+DqWhAZpd6jUKvi7ELv05u0A8EBGWrwaOCxjcVHFkBTjFFKNEQCooB3kg\n18TUWTdIIOuf4ais4q3y+KJle7qfVaOZaocudca+8aqahOse5QgH1pkzhb2vC0YL\nbbLdDEY6bGd3oMsxbeOhp91Ntp7FcY7iKdzvw6ECgYEAhXa4Xo57CxWCPtoUZ48l\nqIEvzHA3cCP0GpTZal3n61Q5zMlAGO8MsOrrdWy374glSu6gIU4/r20T+tf9qQif\n5mPIp/4eoz13ZE5AFwv5fSUJdVLFD5C8H8faq+B9vK0+ppcp1eZbiJswOl3wNCf9\nm4Gmigu16+foC7rfWFtsvpE=\n-----END PRIVATE KEY-----\n");
        credencialesSDK.put("client_email", "firebase-adminsdk-qpf18@manejo-de-ganado.iam.gserviceaccount.com");
        credencialesSDK.put("client_id", "108408740697572452058");
        credencialesSDK.put("auth_uri", "https://accounts.google.com/o/oauth2/auth");
        credencialesSDK.put("token_uri", "https://oauth2.googleapis.com/token");
        credencialesSDK.put("auth_provider_x509_cert_url", "https://www.googleapis.com/oauth2/v1/certs");
        credencialesSDK.put("client_x509_cert_url", "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-qpf18%40manejo-de-ganado.iam.gserviceaccount.com");
        return credencialesSDK;
    }

    private void iniciarBaseDatos() {
        String credencialesSDK = credencialesSDK().toString();
        try {
            InputStream cuentaGoogle = new ByteArrayInputStream(credencialesSDK.getBytes());
            GoogleCredentials credencialesGoogle = GoogleCredentials.fromStream(cuentaGoogle);

            FirebaseOptions ParametrosBaseDatos = new FirebaseOptions.Builder()
                    .setCredentials(credencialesGoogle)
                    .build();

            FirebaseApp.initializeApp(ParametrosBaseDatos);
            iniciadoPreviamente = true;
        } catch (Exception error) {
            Logger.getLogger(FireStore.class.getName()).log(Level.SEVERE, null, error);
        }
    }

    public String agregarDatos(String uid, String nombre, String edad, String corral, String codigoMadre) {
        try {
            if (!iniciadoPreviamente) {
                iniciarBaseDatos();
            }
            Firestore BaseDatos = FirestoreClient.getFirestore();

            String codigo = generarCodigo();
            Map<String, Object> datosVaca = new HashMap<>();

            datosVaca.put("nombre", nombre);
            datosVaca.put("edad", edad);
            datosVaca.put("corral", corral);
            datosVaca.put("codigoMadre", codigoMadre);

            BaseDatos.collection(uid).document(codigo).set(datosVaca);
            return codigo;
        } catch (Exception error) {
            Logger.getLogger(FireStore.class.getName()).log(Level.SEVERE, null, error);
            return "Error";
        }
    }

    public String obtenerDatos(String idUsuario) {
        try {
            if (!iniciadoPreviamente) {
                iniciarBaseDatos();
            }
            Firestore BaseDatos = FirestoreClient.getFirestore();

            ApiFuture<QuerySnapshot> solicitud = BaseDatos.collection(idUsuario).get();
            List<QueryDocumentSnapshot> datosFirestore = solicitud.get().getDocuments();

            JSONObject datosUsuario = new JSONObject();
            JSONObject datosVaca = new JSONObject();
            
            for (QueryDocumentSnapshot elementoFirestore : datosFirestore) {
                String codigo = elementoFirestore.getId();
                String nombre = elementoFirestore.toObject(Vaca.class).nombre;
                String edad = elementoFirestore.toObject(Vaca.class).edad;
                //String promedioLeche = elementoFirestore.toObject(Vaca.class).promedioLeche;
                String corral = elementoFirestore.toObject(Vaca.class).corral;
                String codigoMadre = elementoFirestore.toObject(Vaca.class).codigoMadre;
                
                datosVaca.put("nombre", nombre);
                datosVaca.put("edad", edad);
                datosVaca.put("corral", corral);
                datosVaca.put("codigoMadre", codigoMadre);
                
                datosUsuario.put(codigo, datosVaca.toString());
            }
            
            return datosUsuario.toString();
        } catch (Exception error) {
            Logger.getLogger(FireStore.class.getName()).log(Level.SEVERE, null, error);
            return "Error";
        }
    }
}
