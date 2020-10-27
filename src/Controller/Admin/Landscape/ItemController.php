<?php

namespace App\Controller\Admin\Landscape;

use App\Entity\Landscape\Item;
use App\Form\Landscape\ItemType;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class ItemController extends AbstractController
{
    /**
     * @Route("/admin/landscape/item", name="admin_landscape_item")
     */
    public function index(): Response
    {
        $item = new Item();
        $form = $this->createForm(ItemType::class, $item);

        return $this->render('admin/landscape/item/index.html.twig', [
            'form' => $form->createView(),
        ]);
    }
}
