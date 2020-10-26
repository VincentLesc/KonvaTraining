<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class GameController extends AbstractController
{
    /**
     * @Route("/game", name="game")
     */
    public function index(): Response
    {
        $arr = $this->getArrayConfig();
        return $this->render('game/index.html.twig', [
            'landscapeUrl' => $this->generateUrl('landscape'),
            'arrayConfig' => $arr
        ]);
    }

    private function getArrayConfig() {
        $array = [];
        $row = 0;
        while ($row < 30) {
            $array[$row] = [];
            $column = 0;
            while($column < 30) {
                $array[$row][] = [];
                $column++;
            }
            $row++;
        }
        dump($array);
        return $array;
    }
}
