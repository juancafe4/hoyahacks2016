//
//  TableViewCell.swift
//  nutriday
//
//  Created by Juan Carlos Ferrel on 11/6/16.
//  Copyright © 2016 Juan Carlos Ferrel. All rights reserved.
//

import UIKit

class TableViewCell: UITableViewCell {
    @IBOutlet weak var calories: UILabel!

    @IBOutlet weak var cont: UIView!
    @IBOutlet weak var sodium: UILabel!
    @IBOutlet weak var carbs: UILabel!
    @IBOutlet weak var fat: UILabel!
    @IBOutlet weak var protein: UILabel!
 
    @IBOutlet weak var dateLabel: UILabel!
    override func awakeFromNib() {
        
        super.awakeFromNib()

        // Initialization code
    }

    override func setSelected(_ selected: Bool, animated: Bool) {
        super.setSelected(selected, animated: animated)

        // Configure the view for the selected state
    }
    
}
