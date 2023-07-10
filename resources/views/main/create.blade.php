@extends('layouts.app')

@section('content')
  <div id="warning">
    <h1 style="font-weight:500;">Speech Recognition Speech SDK not found (microsoft.cognitiveservices.speech.sdk.bundle.js missing).</h1>
  </div>

    <div class="container" id="content" style="display:none">
        <div class="row">
            <div class="col-md-6 offset-md-3">
                <div class="card">
                    <div class="card-header">
                        <h4>Chat</h4>
                    </div>
                    <div class="card-body">
                        <div id="chat-messages" class="chat-messages">
                            <!-- Aquí se mostrarán los mensajes del chat -->
                        </div>
                    </div>
                    <div class="card-footer">
                        <form id="chat-form" action="" method="POST">
                            @csrf
                            <div class="input-group">
                                <input type="text" id="phraseDiv" class="form-control" placeholder="Escribe tu mensaje" required>
                                <div class="input-group-append">
                                    <button type="submit" class="btn btn-primary">Enviar</button>
                                </div>
                            </div>
                            <div class="input-group">
                                <input type="text" id="resultDiv" class="form-control" placeholder="Resultado del texto" required>
                            </div>
                        </form>
                        <div id="speech-button" class="mt-3">
                            <button class="btn btn-secondary" id="startRecognizeOnceAsyncButton">Agregar desde el micrófono</button>
                        </div>
                        <div id="text-button" class="mt-3">
                            <button class="btn btn-secondary" id="startSpeakTextAsyncButton">Reproducir texto</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <script src="https://aka.ms/csspeech/jsbrowserpackageraw"></script>
    <script src="{{ asset('build/assets/app-4d59223d.js') }}"></script>

@endsection
