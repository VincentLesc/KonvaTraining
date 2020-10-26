<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class LandscapeController extends AbstractController
{
    /**
     * @Route("/landscape", name="landscape")
     * @param Request $request
     * @return Response
     */
    public function index(Request $request): Response
    {
        dump($request);
        return new JsonResponse(null, 200);
    }
}
