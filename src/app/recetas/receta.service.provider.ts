import { RecetaService } from './receta.service';

let recetaServiceFactory = () => {
    return new RecetaService;
}

export let recetaServiceProvider =
{
    provide: RecetaService,
    useFactory: recetaServiceFactory
};